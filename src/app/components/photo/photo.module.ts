import { PhotoBoardModule } from './../photosBoard/photo-board.module';
import { LikeModule } from './../likeComponent/like.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';


@NgModule({
  declarations: [
    PhotoComponent,
  ],
  imports: [
    CommonModule,
    LikeModule,
  ],
  exports: [ PhotoComponent ]
})
export class PhotoModule { }
