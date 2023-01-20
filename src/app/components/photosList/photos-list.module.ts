import { PhotoService } from './../../services/photos/photos.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoBoardModule } from '../photosBoard/photo-board.module';
import { PhotosListComponent } from './photos-list.component';


@NgModule({
    declarations: [ PhotosListComponent ],
    imports: [ PhotoBoardModule, CommonModule ],
    providers: [ PhotoService ]
})
export class PhotosListModule{}
