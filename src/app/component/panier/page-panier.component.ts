import { Component } from '@angular/core';
import { ManagerPanierService } from '../../service/manager-panier.service';

import { environment } from '../../../environments/environment';
import { Ligne } from '../../models/Ligne';

@Component({
  selector: 'app-page-panier',
  templateUrl: './page-panier.component.html',
  styleUrl: './page-panier.component.css'
})
export class PagePanierComponent {

  panier: Array<Ligne>;
  pathImage = environment.apiGetImages;

  constructor(private managerPanierService: ManagerPanierService) {
    this.panier = managerPanierService.panier;
  }


}