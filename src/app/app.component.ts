import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testes-unitarios';

  public likes = 0;

  public like(){
    this.likes++
  }
}
