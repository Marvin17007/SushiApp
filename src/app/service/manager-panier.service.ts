import { Injectable } from '@angular/core';
import { LignePanier } from '../models/Ligne';
import { Box } from '../models/Box';


@Injectable({
  providedIn: 'root'
})
export class ManagerPanierService {

  lignes: Array<LignePanier>

  constructor() {
    this.lignes = JSON.parse(localStorage.getItem("panier") ?? "[]")
  }

  getPanier() {
    return this.lignes
  }

  add(uneBox: Box, quantite: number) {
    let ligne = new LignePanier(quantite,uneBox)
    let boxExistante = false;
    for (let boxe of this.lignes){
    if (boxe.uneBox.id == ligne.uneBox.id){
      boxe.quantite+=quantite
      boxExistante = true
      
    }
  }
  if (boxExistante == false){
   this.lignes.push(ligne)
  
  }
  localStorage.setItem("panier",JSON.stringify(this.lignes))

}

  remove(uneBox: Box, quantite: number){
  for (let i = 0 ; i <  this.lignes.length; i++){
  if (this.lignes[i].uneBox.id === uneBox.id){
    if (this.lignes[i].quantite > quantite){
      this.lignes[i].quantite -= quantite;
    }else{
      this.lignes.splice(i,1);
    }
    localStorage.setItem("panier",JSON.stringify(this.lignes))
    return
  }
}
localStorage.setItem("panier",JSON.stringify(this.lignes))
}


clearPanier() {
  localStorage.clear();
    this.lignes = [];
}
}
