import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';
import { LikeComponent } from './like.component';

@NgModule({
    declarations: [LikeComponent],
    imports: [CommonModule],
    exports: [LikeComponent],
    providers: [UniqueIdService]
})
export class LikeModule{}
