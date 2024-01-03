import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { BidService } from '../services/bid.service';
import { Bid } from '../model/bid.models';
@Component({
  selector: 'app-update-bid',
  templateUrl: './update-bid.component.html',
  styleUrls: ['./update-bid.component.css']
})
export class UpdateBidComponent implements OnInit{

  categories! : Categorie[];
  updatedCatId! : number;

  
  currentBid = new Bid(); 
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private bidService: BidService) { }



              updateBid() {
                this.currentBid.categorie=this.bidService.consulterCategorie(this.updatedCatId);
                this.bidService.updateBid(this.currentBid).subscribe(bd => {
                this.router.navigate(['bids']);
                }
                );
              }

  ngOnInit(): void {
    this.bidService.listeCategories().subscribe((cats) => {
      this.categories = cats; 
      console.log(cats); }); 
    this.bidService.consulterBid(this.activatedRoute.snapshot.params['id']). subscribe( bd =>{ this.currentBid = bd; } ) ; 
    this.updatedCatId=this.currentBid.categorie.idCat;
  }


}



