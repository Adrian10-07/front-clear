import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './presentation/pages/create-product/create-product.component';
import { DeleteProductComponent } from './presentation/pages/delete-product/delete-product.component';
import { UpdateProductComponent } from './presentation/pages/update-product/update-product.component';
import { ProductListComponent } from './presentation/pages/product-list/product-list.component';

const routes: Routes = [
  { path: 'view-products', component: ProductListComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: '', redirectTo: '/view-products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
