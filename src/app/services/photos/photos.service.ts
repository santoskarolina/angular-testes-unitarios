import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';


export interface Photos{
    title: string
    id: number;
    url: string
}

@Injectable({
    providedIn: 'root'
})
export class PhotoService{

    url = 'https://jsonplaceholder.typicode.com/photos'

    constructor(private http: HttpClient){}

    getPhotos(): Observable<Photos[]>{
        return this.http.get<Photos[]>(this.url)
        .pipe(map(photos => {
            return photos.map(photo => {
                return { ...photo, title: photo.title.toUpperCase() }
            })
        }))
        .pipe(
            delay(2000)
        )
    }
}
