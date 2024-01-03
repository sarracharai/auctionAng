import { Categorie } from "./categorie.model";

export class Bid {
    idBid? : number;
    nomBid? : string;
    description? : string;
    prixMaxBid? : number;
    prixMinBid? : number;
    startTime? : Date ; 
    endTime? : Date ;
    categorie! : Categorie;
}