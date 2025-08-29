import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ProductComponent } from '../product/product.component';
import { RegisterComponent } from '../register/register.component';
import { AdminComponent } from '../admin/admin.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/menu/0', component: AdminComponent },
  { path: 'user/menu/1', component: ProductComponent },
  { path: '**', redirectTo: 'login' },
  { path: 'products', component: ProductComponent },
];
RouterModule.forRoot(routes, { enableTracing: true });
