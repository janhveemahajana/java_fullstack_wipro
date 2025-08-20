import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondcompcommandComponent } from './secondcompcommand/secondcompcommand.component';

@Component({
  selector: 'app-root',
  imports: [SecondcompcommandComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
