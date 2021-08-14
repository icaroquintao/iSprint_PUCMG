import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-atividades-atrasadas',
  templateUrl: 'atividades-atrasadas.html'
})
export class AtividadesAtrasadasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
