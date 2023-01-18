import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppDirectiveModule } from 'src/app/directives/app.directive.module';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';
import { LikeComponent } from './like.component';

@NgModule({
    declarations: [LikeComponent],
    imports: [CommonModule, HttpClientModule, AppDirectiveModule],
    exports: [LikeComponent],
    providers: [UniqueIdService]
})
export class LikeModule{}
