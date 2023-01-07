import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-next-photo',
  templateUrl: './button-next-photo.component.html',
  styleUrls: ['./button-next-photo.component.scss']
})
export class ButtonNextPhotoComponent implements OnInit {

  @Input() isNextPage: boolean = false

  @Output() changePhoto: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  goToNextPhoto(){
    this.changePhoto.emit(this.isNextPage)
  }

}
