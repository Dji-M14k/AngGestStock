import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/model/Produit';
import { ProduitMockService } from './produit.mock.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit{
  produits: Produit[];

  constructor(
    private produitService: ProduitMockService,
  ){
    this.produits = [];
  }
  
  ngOnInit() {
    this.produits = this.produitService.getProduits();
  }

}
