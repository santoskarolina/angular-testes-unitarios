import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppDirective } from './app.directive';
import { AppDirectiveModule } from './app.directive.module';

describe(AppDirective.name, () => {

    let component: AppDirectiveTestComponent;
    let fixture: ComponentFixture<AppDirectiveTestComponent>

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [ AppDirectiveModule ],
            declarations: [ AppDirectiveTestComponent ]
        }).compileComponents();
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(AppDirectiveTestComponent)
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it(`(DOM) (@Output appDirective) should emit
    event with payload when click`, () => {
        // const element: HTMLElement  = fixture.nativeElement.querySelector('.fake__component')
        const element: HTMLElement  = fixture.debugElement.query(By.directive(AppDirective)).nativeElement;

        const clickEvent = new Event('click');
        element.dispatchEvent(clickEvent);

        expect(component.hasActionHandleBeenCalled()).toBe(true);
    })

    it(`(DOM) (@Output appDirective) should not emit the event if the mouse is not clicked`, () => {
        expect(component.hasActionHandleBeenCalled()).toBe(false);
    })
});


@Component({
    template: `<div class="fake__component" (appDirective)="actionHandle($event)"></div>`
})
class AppDirectiveTestComponent{

    public event: Event | any = null;

    public actionHandle(event: Event): void{
        this.event = event;
    }

    public hasActionHandleBeenCalled(): boolean{
        return !!this.event
    }
}
