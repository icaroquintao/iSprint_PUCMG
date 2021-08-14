import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtividadesPage } from '../atividades/atividades';

@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html'
})
export class ProjetoPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAtividades(params){
    if (!params) params = {};
    this.navCtrl.push(AtividadesPage);
  }
}
