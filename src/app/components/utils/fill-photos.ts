import { Photos } from "src/app/services/photos/photos.service";

export function photosArray(): Photos[] {
    var photos: Photos[] = [];
    for(let i = 0; i < 5; i++){
        photos.push({
            id: i,
            title: `Photo ${i}`,
            url: `www.photo${i}.com`
        })
    }
    return photos;
}
