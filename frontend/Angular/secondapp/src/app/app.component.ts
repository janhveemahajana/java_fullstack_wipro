import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'secondapp';
  name:string='Janhvee';

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}
