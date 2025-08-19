import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-ex2',
  imports: [NgClass],
  templateUrl: './ng-class-ex2.component.html',
  styleUrl: './ng-class-ex2.component.css'
})
export class NgClassEx2Component {
  flag1:boolean = true;
  flag2:boolean = true;

  getNgClass(){
    return{
      app1: this.flag1,
      app2: this.flag2,
    }
  }
}
