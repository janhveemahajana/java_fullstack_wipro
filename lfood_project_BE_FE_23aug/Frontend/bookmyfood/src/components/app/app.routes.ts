import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FoodlistComponent } from '../foodlist/foodlist.component';

export const routes: Routes = [
  { path: 'foodlist', component: FoodlistComponent },
  { path: '', component: LoginComponent }
];
