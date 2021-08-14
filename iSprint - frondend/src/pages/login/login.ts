import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdministradorPage } from '../administrador/administrador';
import { CadastrarNovoUsuRioPage } from '../cadastrar-novo-usu-rio/cadastrar-novo-usu-rio';
import { MenuPage } from '../menu/menu';
import { MeusProjetosPage } from '../meus-projetos/meus-projetos';
import { ProjetoPage } from '../projeto/projeto';
import { AtividadesPage } from '../atividades/atividades';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAdministrador(params){
    if (!params) params = {};
    this.navCtrl.push(AdministradorPage);
  }goToCadastrarNovoUsuRio(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarNovoUsuRioPage);
  }goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }goToMeusProjetos(params){
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
