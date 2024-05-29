import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './features/pages/landing/landing.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ProductUpdateComponent } from './features/product/product-update/product-update.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'product-edit/:id', component: ProductUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
