import { Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductdeleteComponent } from './productdelete/productdelete.component';
import { OrderplaceComponent } from './orderplace/orderplace.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

export const routes: Routes = [
    { path: '', component: ProductlistComponent },
 { path: 'productlist', component: ProductlistComponent },
 { path: 'productadd', component: ProductaddComponent },
{ path: 'productedit/:id', component: ProducteditComponent },
{ path: 'productdelete/:id', component: ProductdeleteComponent },
{ path: 'placeorder', component: OrderplaceComponent },
{ path: 'orderhistory', component: OrderhistoryComponent }
];
