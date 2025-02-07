import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './presentation/pages/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './presentation/pages/create-product/create-product.component';
import { DeleteProductComponent } from './presentation/pages/delete-product/delete-product.component';
import { UpdateProductComponent } from './presentation/pages/update-product/update-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    DeleteProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
