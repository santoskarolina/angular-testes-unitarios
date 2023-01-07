import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNextPhotoComponent } from './button-next-photo.component';

describe('ButtonNextPhotoComponent', () => {
  let component: ButtonNextPhotoComponent;
  let fixture: ComponentFixture<ButtonNextPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNextPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNextPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
