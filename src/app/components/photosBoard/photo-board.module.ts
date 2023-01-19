import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotosBoardsComponent } from './photos-board.component';


@NgModule({
    declarations: [ PhotosBoardsComponent ],
    imports:  [ CommonModule, PhotoModule ],
    exports: [ PhotosBoardsComponent ]
})

export class PhotoBoardModule{}
