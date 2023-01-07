import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public photo: string = '';
  @Input() public likes: number = 0;

  @Output() public liked: EventEmitter<void> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  public likePhoto(): void{
    this.liked.emit()
  }

}
