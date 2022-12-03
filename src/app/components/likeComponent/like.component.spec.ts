import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UniqueIdService } from "src/app/services/unique-id/unique-id.service";
import { LikeComponent } from "./like.component";

describe(LikeComponent.name, () => {
    let fixture: ComponentFixture<LikeComponent>;
    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [LikeComponent],
            providers: [UniqueIdService]
        }).compileComponents();
        fixture = TestBed.createComponent(LikeComponent)
    })

    it('should create component', () => {
         const instance = fixture.componentInstance;
         expect(instance).toBeTruthy()
    })
})
