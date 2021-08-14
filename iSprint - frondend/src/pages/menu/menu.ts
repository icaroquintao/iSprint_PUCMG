import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeusProjetosPage } from '../meus-projetos/meus-projetos';
import { ProjetoPage } from '../projeto/projeto';
import { AtividadesPage } from '../atividades/atividades';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToMeusProjetos(params){
    if (!params) params = {};
    this.navCtrl.push(MeusProjetosPage);
  }goToProjeto(params){
    if (!params) params = {};
    this.navCtrl.push(ProjetoPage);
  }goToAtividades(params){
    if (!params) params = {};
    this.navCtrl.push(AtividadesPage);
  }
}
