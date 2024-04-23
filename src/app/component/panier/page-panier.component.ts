import { Component } from '@angular/core';
import { ManagerPanierService } from '../../service/manager-panier.service';
import { environment } from '../../../environments/environment';
import { Ligne } from '../../models/Ligne';

@Component({
  selector: 'app-page-panier',
  templateUrl: './page-panier.component.html',
  styleUrls: ['./page-panier.component.css']
})
export class PagePanierComponent {

  panier: Array<Ligne>;
  pathImage = environment.apiGetImages;
  total: number = 0;

  constructor(private managerPanierService: ManagerPanierService) {
    this.panier = managerPanierService.panier;
    this.calculerTotal();
  }

  ajouterQuantite(ligne: Ligne): void {
    ligne.qte += 1;
    this.managerPanierService.savePanier();
  }

  enleverQuantite(ligne: Ligne): void {
    ligne.qte -= 1;
    if (ligne.qte < 0) {
      ligne.qte = 0; // Réinitialiser la quantité à zéro si elle devient négative
    }
    this.managerPanierService.savePanier(); // Appel de la fonction pour sauvegarder le panier
  }
  

  supprimerLigne(ligne: Ligne): void {
    this.managerPanierService.supprimerLigne(ligne);
    this.panier = this.managerPanierService.panier; // Mettre à jour la variable panier
  }

  calculerTotal(): void {
    this.total = this.panier.reduce((acc, ligne) => acc + ligne.qte * ligne.box.prix, 0);
  }
}
