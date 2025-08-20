import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFruit } from '../ifruit';

@Component({
  selector: 'app-display-list',
  imports: [],
  templateUrl: './display-list.component.html',
  styleUrl: './display-list.component.css'
})
export class DisplayListComponent {
  // @Input() fruit:any;
  // @Input() producttitle: string='';
  // @Input() productdescription: string='';
  // @Input() productimg: string='';

  @Input() fruit:IFruit = {
    producttitle:'',
    productdescription:'',
    productimg:''
  };

  @Output() btnClick = new EventEmitter<string>();
 
  onClick(prodtitle:string) {
    console.log("Clicked-"+prodtitle);
    this.btnClick.emit(prodtitle);
 
}
}
