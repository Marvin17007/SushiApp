import { Injectable } from '@angular/core';

import { Box } from '../models/Box';
import { Aliment } from '../models/Aliment';
import { ApiSushiService } from './api-sushi.service';
import { Ligne } from '../models/Ligne';


@Injectable({
  providedIn: 'root'
})
export class ManagerPanierService {

  panier:Array<Ligne>
  CLE_PANIER: string = "panier";    // Nom de la clé pour localstorage.


  constructor(private apiSushiService: ApiSushiService) {
    this.panier=[]

    if (localStorage.getItem(this.CLE_PANIER) != null) {
      this.panier = JSON.parse(localStorage.getItem(this.CLE_PANIER) || "[]");
    }

    else {
      this.panier = []
    }
  
  }




  addBox(addQte: number, newBox: Box): void {   
    let ligne=new Ligne(addQte,newBox) 
    let estPresent=false
  
    for (const uneLigne of this.panier) {
      if(uneLigne.box.id==newBox.id){
        estPresent=true
        uneLigne.qte+=addQte
      //TODO si qte =0 il faut supprimer la ligne du panier
      }
    }

    if(estPresent==false){
      this.panier.push(ligne)  
    }
  
    //console.log(this.panier);
    //console.log(JSON.stringify(this.panier));
    //console.log(JSON.stringify(this.panier.articles.get(1)));
    console.log(this.panier)
     localStorage.setItem(this.CLE_PANIER, JSON.stringify(this.panier));  
  }
}