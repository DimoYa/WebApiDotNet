import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './features/pages/landing/landing.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductItemComponent } from './features/product/product-item/product-item.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProductUpdateComponent } from './features/product/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductCreateComponent,
    HeaderComponent,
    FooterComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
