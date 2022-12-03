import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LikeComponent } from './like.component';

@NgModule({
    declarations: [LikeComponent],
    imports: [CommonModule],
    exports: [LikeComponent]
})
export class LikeModule{

}
