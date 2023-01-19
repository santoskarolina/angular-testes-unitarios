import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UniqueIdService } from "src/app/services/unique-id/unique-id.service";
import { LikeComponent } from "./like.component";
import { LikeModule } from "./like.module";

describe(LikeComponent.name, () => {
    let fixture: ComponentFixture<LikeComponent>
    let component: LikeComponent
    let service: UniqueIdService

    beforeEach(async() => {
        await TestBed.configureTestingModule({
           imports: [LikeModule]
        }).compileComponents();
    })

    beforeEach(() => {
      fixture = TestBed.createComponent(LikeComponent)
      component = fixture.componentInstance;
      fixture.detectChanges()
      service = new UniqueIdService();
    })

    it(`Should create component ${LikeComponent.name}`, () => {
         expect(component).toBeTruthy()
    })

    it('Should auto-generete id during ngOnInit when (@Input id) it NOT assigned', () => {
        expect(component.id).toBeTruthy()
    })

    it('Should NOT auto-generete id during ngOnInit when (@Input id) it assigned', () => {
        const componentID = service.generateUniqueIdWithPrefix(LikeComponent.name);
        component.id = componentID;
        expect(component.id).toBe(componentID);
    })

    it(`#${LikeComponent.prototype.like.name} should trigger (@Output liked) when called` , () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    });

    it('(DOM) Should have id atribute', () => {
        const componentID = service.generateUniqueIdWithPrefix(LikeComponent.name);
        component.id = componentID
        fixture.detectChanges();

        const span = fixture.nativeElement.querySelector('span');

        expect(span.getAttribute('id')).toBe(componentID);
    })

    it('(DOM) Should display number of likes when clicked', done =>{
        component.liked.subscribe({
            next: () => {
                component.likes++;
                fixture.detectChanges();
                const likeCounterElement = fixture.nativeElement.querySelector('.like__counter');
                expect(likeCounterElement.textContent.trim()).toBe('1');
                done();
            }
        });

        const likeContainerElement: HTMLElement = fixture.nativeElement.querySelector('.like__container')
        likeContainerElement.click();
    });

    it('(DOM) Should display number of likes when ENTER key is pressed', done =>{
        component.liked.subscribe({
            next: () => {
                component.likes++;
                fixture.detectChanges();
                const likeCounterElement = fixture.nativeElement.querySelector('.like__counter');
                expect(likeCounterElement.textContent.trim()).toBe('1');
                done();
            }
        });

        const likeContainerElement: HTMLElement = fixture.nativeElement.querySelector('.like__container')

        const keyDownEvent = new KeyboardEvent('keyup', { key: 'Enter' });
        likeContainerElement.dispatchEvent(keyDownEvent);
    });
})
