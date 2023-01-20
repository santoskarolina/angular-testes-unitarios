import { TestBed } from '@angular/core/testing';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const mockData = {
    api: 'https://jsonplaceholder.typicode.com/photos',
    data: [
        {
            title: 'Photo 1',
            id: 1,
            url: 'https://jsonplaceholder.typicode.com/photos/123'
         },
         {
            title: 'Photo 2',
            id: 2,
            url: 'https://jsonplaceholder.typicode.com/photos/123'
         }
    ]
};

describe(PhotoService.name, () => {

    let service: PhotoService
    let httpController: HttpTestingController

    beforeEach(async() =>{
        await TestBed.configureTestingModule({
            providers: [ PhotoService ],
            imports: [ HttpClientTestingModule ]
        }).compileComponents();

        service = TestBed.inject(PhotoService);
        httpController = TestBed.inject(HttpTestingController)
    });

    it(`#${PhotoService.prototype.getPhotos.name} should return photos with title in uppercase`, done => {

        service.getPhotos().subscribe(photos => {
            expect(photos[0].title).toBe('PHOTO 1');
            expect(photos[1].title).toBe('PHOTO 2');
            done();
        })

        const request = httpController.expectOne({url: mockData.api});
        request.flush(mockData.data);

        httpController.verify();
    });

})
