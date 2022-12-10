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

    it(`Shoud create component ${LikeComponent.name}`, () => {
         expect(component).toBeTruthy()
    })

    it('Shoud auto generete id when id input property is missing', () => {
        expect(component.id).toBeTruthy()
    })

    it('Shoud not generete id when id input property is present', () => {
        const componentID = service.generateUniqueIdWithPrefix(LikeComponent.name)
        component.id = componentID
        expect(component.id).toBe(componentID)
    })

    it(`#${LikeComponent.prototype.like.name}
    should trigger (@Output liked) when called` , () => {
        // component.liked.subscribe({
        //     next: () => {
        //         expect(true).toBeTrue()
        //         done()
        //     }
        // })
        // component.like()

        spyOn(component.liked, 'emit')
        component.like()
        expect(component.liked.emit).toHaveBeenCalled()
    });
})
