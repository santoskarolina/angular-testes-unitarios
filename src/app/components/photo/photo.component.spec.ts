import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PhotoComponent } from './photo.component';
import { PhotoModule } from './photo.module';

describe(PhotoComponent.name, () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoModule]
   }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(`Should create ${PhotoComponent.name}`, () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoComponent.prototype.likePhoto.name} should trigger (@Output liked) once when called
  multiple times whitin debounce time`, fakeAsync(() => {
    let times = 0;
    component.liked.subscribe({ next: () => { times++ } })

    component.likePhoto()
    component.likePhoto()

    tick(500)
    expect(times).toBe(1)
  }));

  it(`#${PhotoComponent.prototype.likePhoto.name} should trigger (@Output liked) two times when called outside debouce
  time`, fakeAsync(() => {
    let times = 0;
    component.liked.subscribe({ next: () => { times++ } })

    component.likePhoto();
    tick(500);

    component.likePhoto();
    tick(500);

    expect(times).toBe(2)
  }));


  it(`(DOM) Should display number of likes when (@Input likes) is incremented`, () => {
    component.likes++;
    fixture.detectChanges();

    const like__counter = fixture.nativeElement.querySelector('.like__counter');
    expect(like__counter.textContent.trim()).toBe('1');
  })

  it('(DOM) Should update aria-label when (@Input likes) is incremented', () => {
    component.likes++;
    fixture.detectChanges();

    const like__counter = fixture.nativeElement.querySelector('.like__counter');
    expect(like__counter.getAttribute('aria-label')).toBe('1: people liked')
  })

  it('(DOM) Should have aria-label with 0 (@Input likes)', () =>{
    const like__counter = fixture.nativeElement.querySelector('.like__counter');
    expect(like__counter.getAttribute('aria-label')).toBe('0: people liked')
  })
});
