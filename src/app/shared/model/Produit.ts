export class Produit{
    public nom?: string;
    public prix?: number;
    public quantite?: number;

    constructor(nom: string, prix:number, qte:number){
        this.nom = nom;
        this.prix = prix;
        this.quantite = qte;
    }


}