import { Routes } from '@angular/router';
import { PhotosListModule } from './components/photosList/photos-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
