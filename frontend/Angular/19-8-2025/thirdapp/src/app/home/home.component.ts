import { Component } from '@angular/core';
import { DisplayListComponent } from '../display-list/display-list.component';
import { IFruit } from '../ifruit';

@Component({
  selector: 'app-home',
  imports: [DisplayListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  remove(prodtitle:string) {
  console.log("Remove button clicked-"+prodtitle);
  this.fruits= this.fruits.filter(fruit => fruit.producttitle !== prodtitle);
}

  fruits:IFruit[]=[{
    producttitle: 'Apple', productdescription:'A fresh fruit for good health', productimg:'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834'
  },{
    producttitle: 'Mango', productdescription:'A fresh fruit for good health', productimg:'https://5.imimg.com/data5/UY/JY/OU/SELLER-29245728/organic-fruits-1000x1000.jpg'
  },{
    producttitle: 'Kiwi', productdescription:'A fresh fruit for good health', productimg:'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg?w=400&h=300&c=crop'
  },{
    producttitle: 'Orange', productdescription:'A fresh fruit for good health', productimg:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg?20141112073556'
  },{
    producttitle: 'Banana', productdescription:'A fresh fruit for good health', productimg:'https://mana.md/wp-content/uploads/2021/11/banana-1025109_1280-1024x793.jpg'
  },{
    producttitle: 'Watermelon', productdescription:'A fresh fruit for good health', productimg:'https://weresmartworld.com/sites/default/files/styles/square_500x500/public/2021-04/watermeloen_2.jpg?itok=aim2u0vC'
  },{
    producttitle: 'DragonFruit', productdescription:'A fresh fruit for good health', productimg:'https://images.everydayhealth.com/images/diet-nutrition/dragon-fruit-101-1440x810.jpg?w=508'
  },{
    producttitle: 'Apple', productdescription:'A fresh fruit for good health', productimg:'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834'
  },{
    producttitle: 'Mango', productdescription:'A fresh fruit for good health', productimg:'https://5.imimg.com/data5/UY/JY/OU/SELLER-29245728/organic-fruits-1000x1000.jpg'
  },{
    producttitle: 'Kiwi', productdescription:'A fresh fruit for good health', productimg:'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg?w=400&h=300&c=crop'
  },{
    producttitle: 'Orange', productdescription:'A fresh fruit for good health', productimg:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg?20141112073556'
  },{
    producttitle: 'Banana', productdescription:'A fresh fruit for good health', productimg:'https://mana.md/wp-content/uploads/2021/11/banana-1025109_1280-1024x793.jpg'
  },{
    producttitle: 'Watermelon', productdescription:'A fresh fruit for good health', productimg:'https://weresmartworld.com/sites/default/files/styles/square_500x500/public/2021-04/watermeloen_2.jpg?itok=aim2u0vC'
  },{
    producttitle: 'DragonFruit', productdescription:'A fresh fruit for good health', productimg:'https://images.everydayhealth.com/images/diet-nutrition/dragon-fruit-101-1440x810.jpg?w=508'
  },{
    producttitle: 'Apple', productdescription:'A fresh fruit for good health', productimg:'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834'
  }]
}
