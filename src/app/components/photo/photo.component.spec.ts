import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';

describe(PhotoComponent.name, () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create ${PhotoComponent.name}`, () => {
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
});