import { Produit } from "src/app/shared/model/Produit";
import { Injectable } from "@angular/core";

@Injectable()
export class ProduitMockService{
    private PRODUITS: Produit[] = [];
    
    constructor(){
        let p1: Produit = new Produit('Livre', 5000, 14); 
        let p2: Produit = new Produit('Sac', 15000, 3); 
        let p3: Produit = new Produit('Gourde', 5050, 1); 
        let p4: Produit = new Produit('Cahier', 2500, 22);
        
        this.PRODUITS.push(p1,p2,p3,p4);
    }

    public getProduits() : Produit[]{
        return this.PRODUITS;
    }
}