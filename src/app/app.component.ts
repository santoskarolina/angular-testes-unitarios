import { Observable } from 'rxjs';
import { PhotoService, Photos } from './services/photos/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  photos: Photos[] = [];

  constructor(private service: PhotoService){}


  ngOnInit(): void {
    this.service.getPhotos().subscribe({next: (photos) => this.photos = photos.slice(0,15)});
  }

}
