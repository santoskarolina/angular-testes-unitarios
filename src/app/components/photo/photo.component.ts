import { EventEmitter, OnDestroy } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {

  @Input() public title: string = '';
  @Input() public photo: string = '';
  @Input() public likes: number = 0;

  @Output() public liked: EventEmitter<void> = new EventEmitter()

  private debounceSubject: Subject<void> = new Subject()
  private componenteDestroy$: Subject<void> = new Subject()

  constructor() { }

  ngOnInit(): void {
    this.initDebounceSubject()
  }

  public likePhoto(): void{
    this.debounceSubject.next()
  }

  public initDebounceSubject(){
    this.debounceSubject.asObservable().pipe(
      debounceTime(500),
      takeUntil(this.componenteDestroy$)
    ).subscribe({
      next: () => {
        this.liked.emit()
      }
    })
  }

  ngOnDestroy(): void {
   this.componenteDestroy$.next()
   this.componenteDestroy$.complete()
  }
}
