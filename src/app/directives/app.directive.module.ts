import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppDirective } from './app.directive';

@NgModule({
    declarations: [ AppDirective ],
    imports: [ CommonModule ],
    exports: [ AppDirective ]
})
export class AppDirectiveModule{

}
