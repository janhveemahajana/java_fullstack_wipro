import { Component } from '@angular/core';
import { MovielistComponent } from './movielist/movielist.component';

@Component({
  selector: 'app-root',
  imports: [MovielistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ex5Service';
}
