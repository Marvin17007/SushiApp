import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCardSushiBoxesComponent } from './component/container-card-sushi-boxes/container-card-sushi-boxes.component';
import { FooterComponent } from './component/footer/footer.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { PanierComponent } from './component/panier/panier.component';

const routes: Routes = [
  { path: "", component: ContainerCardSushiBoxesComponent },
  { path: "rgpd", component: RgpdComponent },
  { path: "panier", component: PanierComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
