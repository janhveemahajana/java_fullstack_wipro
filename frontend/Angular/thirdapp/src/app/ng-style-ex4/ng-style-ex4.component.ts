import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-ex4',
  imports: [NgStyle],
  templateUrl: './ng-style-ex4.component.html',
  styleUrl: './ng-style-ex4.component.css'
})
export class NgStyleEx4Component {
  flag1:boolean = true

  color1:string = 'purple'
  fontSize1:string = '10px'
  bgColor:string = 'skyblue'
}
