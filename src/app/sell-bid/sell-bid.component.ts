import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Categorie } from '../model/categorie.model';
import { BidService } from '../services/bid.service';
import { Bid } from '../model/bid.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sell-bid',
  templateUrl: './sell-bid.component.html',
  styleUrls: ['./sell-bid.component.css']
})
export class SellBidComponent implements OnInit {

  newBid = new Bid();
  categories! : Categorie[];

  newIdCat! : number; 
  newCategorie! : Categorie;
  constructor(private bidService: BidService, private router :Router) { }

  ngOnInit(): void {this.bidService.listeCategories().subscribe((cats) => {
    this.categories = cats; 
    console.log(cats); }); }


    placeBid() {
       // console.log(this.newBid);
      this.bidService.ajouterBid(this.newBid) .subscribe(bd => { console.log(bd); 
      this.router.navigate(['bids']); }); 
      }

}
