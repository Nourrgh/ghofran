import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { ShowProductComponent } from './components/show-product/show-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'show-product',component:ShowProductComponent},
  {path:'account',component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
