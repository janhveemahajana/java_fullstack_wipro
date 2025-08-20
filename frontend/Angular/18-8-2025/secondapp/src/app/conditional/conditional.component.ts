import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conditional',
  imports: [FormsModule],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css'
})
export class ConditionalComponent {
  // ex 11
  showMessage: boolean = false;
  toggleCheck() {
    this.showMessage = !this.showMessage;
  }

  // ex 12
  countryNames: string[] = ["India", "USA", "UK", "Australia", "Canada"];
  loadcountry: string[] = [];
  
  loadCountry(){
    this.loadcountry = this.countryNames;
  }

  
}
