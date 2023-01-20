import { PhotoService } from 'src/app/services/photos/photos.service';
import { PhotosBoardsComponent } from './../photosBoard/photos-board.component';
import { PhotosListModule } from './photos-list.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosListComponent } from './photos-list.component';

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

    it(`(DOM) Should display ${PhotosBoardsComponent.name} when data arrives`, () => {

    })

})
