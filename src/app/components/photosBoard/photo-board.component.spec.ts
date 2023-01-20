import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { photosArray } from '../utils/fill-photos';
import { PhotoBoardModule } from './photo-board.module';
import { PhotosBoardsComponent } from "./photos-board.component";

describe(PhotosBoardsComponent.name, () => {
    let fixture: ComponentFixture<PhotosBoardsComponent>;
    let component: PhotosBoardsComponent;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [ PhotoBoardModule ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotosBoardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it(`Should create ${PhotosBoardsComponent.name}`, () => {
        expect(component).toBeTruthy();
    })

    it('Should fill the array of photos ids when (@Input photos) it assigned', () =>{
        const photos = photosArray();
        component.photos = photos;

        fixture.detectChanges();

        const changes: SimpleChanges = {
            photos: new SimpleChange([], component.photos, true),
        }

        component.ngOnChanges(changes);
        expect(component.photosIds.length).withContext('Length of photos ids)').toBe(5);
    });
})
