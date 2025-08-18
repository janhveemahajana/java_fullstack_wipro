import { Component } from '@angular/core';
import { ConditionalComponent } from '../conditional/conditional.component';

@Component({
  selector: 'app-list',
  imports: [ConditionalComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  names = ['Janhvee', 'Anmol', 'Bhavik', 'Aditi'];
}
