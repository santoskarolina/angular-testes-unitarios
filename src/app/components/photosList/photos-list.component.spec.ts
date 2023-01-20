import { PhotoService } from 'src/app/services/photos/photos.service';
import { PhotosBoardsComponent } from './../photosBoard/photos-board.component';
import { PhotosListModule } from './photos-list.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosListComponent } from './photos-list.component';
import { photosArray } from '../utils/fill-photos';
import { of } from 'rxjs';

describe(PhotosListComponent.name, () => {
    let fixture: ComponentFixture<PhotosListComponent>;
    let component: PhotosListComponent;
    let service: PhotoService;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [ PhotosListModule ]
        }).compileComponents();
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotosListComponent);
        component = fixture.componentInstance;
        service = TestBed.inject(PhotoService);
        fixture.detectChanges();
    })

    it(`Should create ${PhotosListComponent.name}`, () => {
        expect(component).toBeTruthy();
    })

    it(`(DOM) Should display #loader when data arrives`, () => {
        const photos = photosArray();

        spyOn(service, 'getPhotos').and.returnValue(of(photos));
        component.isLoading = false;
        fixture.detectChanges();

        const appPhotosBoard = fixture.nativeElement.querySelector('app-photos-board');
        const loader = fixture.nativeElement.querySelector('.loader');

        expect(appPhotosBoard).withContext('Should display appPhotosBoard').not.toBeNull();
        expect(loader).withContext('Should not display loader').toBeNull();
    })


    it(`(DOM) Should display #${PhotosBoardsComponent.name} when data arrives`, () => {
        const photos = photosArray();

        spyOn(service, 'getPhotos').and.returnValue(of(photos));
        fixture.detectChanges();

        const appPhotosBoard = fixture.nativeElement.querySelector('app-photos-board');
        const loader = fixture.nativeElement.querySelector('.loader');

        expect(appPhotosBoard).withContext('Should not display appPhotosBoard').toBeNull();
        expect(loader).withContext('Should display loader').not.toBeNull();
    })
})
