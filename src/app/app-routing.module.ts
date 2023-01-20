import { PhotosListComponent } from './components/photosList/photos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'photos', component: PhotosListComponent },
  { path: '**', redirectTo: 'photos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
