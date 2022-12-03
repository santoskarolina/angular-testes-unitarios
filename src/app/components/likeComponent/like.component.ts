import { Component, Output, EventEmitter, Input, Optional, OnInit } from "@angular/core";
import { UniqueIdService } from "src/app/services/unique-id/unique-id.service";

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

    @Output() public liked = new EventEmitter<void>();
    @Input() public likes = 0;
    @Optional() @Input() public id: string | any = null;

    constructor(
        private uniqueIdService: UniqueIdService
    ){}

  ngOnInit(): void {
   this.getId()
  }

    getId(){
        if(!this.id){
            this.id = this.uniqueIdService.generateUniqueIdWithPrefix(LikeComponent.name)
            console.log("🚀 ~ file: like.component.ts:24 ~ LikeComponent ~ getId ~  this.id",  this.id)
        }
    }

    public like(): void{
        this.liked.emit()
    }
}
