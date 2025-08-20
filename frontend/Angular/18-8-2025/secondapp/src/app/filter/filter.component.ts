import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  namelist:string[] = ["Janhvee", "Aditi", "Anmol", "Bhavik", "Arpita", "Dhananjay"]
  filteredlist:string[] = [...this.namelist]

  filterList(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredlist = this.namelist.filter(name =>
      name.toLowerCase().startsWith(searchText)
    );
  }
}
