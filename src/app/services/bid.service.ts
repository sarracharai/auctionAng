import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bid } from '../model/bid.models';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};

@Injectable({
  providedIn: 'root'
})

export class BidService {
  
  apiURL: string = 'http://localhost:8083/bids/api';
  bid! : Bid;
  bids! : Bid[]; //un tableau de Produit
  categories! : Categorie[];


  constructor(private http : HttpClient) { 
    /* this.categories = [ 
      {idCat : 1, nomCat : "Voiture"}, 
      {idCat : 2, nomCat : "Maison"}];

    this.bids = [
      {
        idBid: 1,
        description: "Nouveau",
        nomBid: "Peugeot",
        prixMaxBid: 4555,
        prixMinBid: 3333,
        startTime: new Date("01/14/2011 10:32:37"),
        endTime: new Date("01/14/2011 10:32:37"),
        categorie :{idCat : 1, nomCat : "Voiture"}
      },
    ]
 */
  }

  listeBids():Bid[] {
    return this.bids; 
  }

  sellBid( bd: Bid): Observable<Bid>{ 
    return this.http.post<Bid>(this.apiURL, bd, httpOptions); 
  }

  consulterBid(id:  number):Observable<Bid> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Bid>(url);
    
  }


  updateBid(bd:Bid) : Observable<Bid>{ 
    // console.log(b);
    return this.http.put<Bid>(this.apiURL,bd,httpOptions); 
  }

  listeCategories(): Observable<Categorie[]> { 
    return this.http.get<Categorie[]>(this.apiURL + '/cat');
    
  }

  consulterCategorie(id:number): Categorie{
     return this.categories.find(cat => cat.idCat == id)!; 
    }

    listeBid(): Observable<Bid[]>{ return this.http.get<Bid[]>(this.apiURL); }


    ajouterBid( bd: Bid):Observable<Bid>{ return this.http.post<Bid>(this.apiURL, bd, httpOptions); }

    rechercherParCategorie(idCat: number): Observable< Bid[]> { 
      const url = `${this.apiURL}/bidscat/${idCat}`; 
      return this.http.get<Bid[]>(url); }

}
