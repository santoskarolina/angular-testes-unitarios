import { Component, ViewChild} from '@angular/core';
import { Photos } from '../../services/photos/photos.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardModule } from './photo-board.module';
import { PhotosBoardsComponent } from "./photos-board.component";
import { photosArray } from '../utils/fill-photos';

describe(PhotosBoardsComponent.name + ' without ngOnChanges', () => {
    let fixture: ComponentFixture<BoardComponent>;
    let component: BoardComponent;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [ PhotoBoardModule ],
            declarations: [ BoardComponent ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('Should fill the array of photos ids when (@Input photos) it assigned', () =>{
        const photos = photosArray();
        component.photos = photos;

        fixture.detectChanges();

        expect(component.photosBoardsComponent.photosIds.length).withContext('Length of photos ids)').toBe(5);
    });
})


@Component({
    template: `<app-photos-board [photos]="photos"></app-photos-board>`
})
class BoardComponent{

    @ViewChild(PhotosBoardsComponent) public photosBoardsComponent: PhotosBoardsComponent;

    public photos: Photos[] = [];
}
