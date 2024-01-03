import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidsComponent } from './bids/bids.component';
import { UpdateBidComponent } from './update-bid/update-bid.component';
import { SellBidComponent } from './sell-bid/sell-bid.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';

const routes: Routes = [
  {path: "bids", component : BidsComponent},
  {path: "sell-bid", component : SellBidComponent},
  {path: "updateBid/:id", component: UpdateBidComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "", redirectTo: "bids", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
