import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffreEmploisComponent } from './offre-emplois/offre-emplois.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'' , redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'product/:id',component: DetailsProductComponent},
  {path:'offres', component:OffreEmploisComponent},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
