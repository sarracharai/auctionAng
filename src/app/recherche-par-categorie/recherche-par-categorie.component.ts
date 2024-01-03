import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { BidService } from '../services/bid.service';
import { Bid } from '../model/bid.models';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit{

  bids! : Bid[]; 
  IdCategorie! : number; 
  categories! : Categorie[];
  constructor(private bidService : BidService){}
  
  ngOnInit(): void { 
    this.bidService.listeCategories().subscribe((cats) => {
      this.categories = cats; 
      console.log(cats); }); 
    }

  onChange() { this.bidService.rechercherParCategorie(this.IdCategorie). subscribe(bds =>{this.bids=bds}); }
}
