import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './features/pages/landing/landing.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'product-list', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
