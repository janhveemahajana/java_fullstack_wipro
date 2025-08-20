import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CtofPipe } from './ctof.pipe';
import { CustomDirDirective } from './custom-dir.directive';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, FormsModule, DatePipe, CtofPipe, CustomDirDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //ex1
  title = 'pipedirdemo';
  userInput: string = '';


  //ex2
  selectedDate: string | null = null;

  //ex3
  celsius: number | null = null;
}
