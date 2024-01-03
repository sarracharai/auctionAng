import { Component } from '@angular/core';
import { Bid } from '../model/bid.models';
import { BidService } from '../services/bid.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent {

  bids: Bid[];
  

  constructor(private bidService: BidService,
              private router: Router
    ) {
    this.bids = bidService.listeBids();

  }

  redirectToBidDetails(bidId: string) {
    // Use the Router service to navigate to bid details
    this.router.navigate(['/bids', bidId]);
  }



  ngOnInit(): void {

    this.bidService.listeBid().subscribe(bd => { console.log(bd); this.bids = bd; });
  }
  
  }




