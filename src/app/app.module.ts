import { ButtonNextPhotoModule } from './components/button-next-photo/button-next-photo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeModule } from './components/likeComponent/like.module';
import { PhotoModule } from './components/photo/photo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeModule,
    PhotoModule,
    ButtonNextPhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
