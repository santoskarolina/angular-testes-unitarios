import { Photos } from './../../services/photos/photos.service';
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component({
    selector: 'app-photos-board',
    templateUrl: './photos-board.component.html',
    styleUrls: ['./photos-board.component.scss']
})
export class PhotosBoardsComponent implements OnChanges{

    @Input() public photos: Photos[] = [];

    public photosIds: number[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['photos']){
            this.fillPhotosIds(changes['photos'].currentValue);
        }
    }

    fillPhotosIds(photos: Photos[]){
      this.photosIds = photos.map(photo => photo.id);
    }
}
