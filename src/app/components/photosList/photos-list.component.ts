import { Component, OnInit } from "@angular/core";
import { Photos, PhotoService } from "src/app/services/photos/photos.service";

@Component({
    selector: 'app-photos-list',
    templateUrl: './photos-list.component.html',
    styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit{


    public isLoading: boolean = true;

   photos: Photos[] = [];

    constructor(private service: PhotoService){}

    ngOnInit(): void {
        this.service.getPhotos().subscribe({next: (photos) => {
        this.photos = photos.slice(0,15)
        this.isLoading = false;
        }});
    }
}
