import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjetoPage } from '../projeto/projeto';
import { AtividadesPage } from '../atividades/atividades';

@Component({
  selector: 'page-meus-projetos',
  templateUrl: 'meus-projetos.html'
})
export class MeusProjetosPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToProjeto(params){
    if (!params) params = {};
    this.navCtrl.push(ProjetoPage);
  }goToAtividades(params){
    if (!params) params = {};
    this.navCtrl.push(AtividadesPage);
  }
}
