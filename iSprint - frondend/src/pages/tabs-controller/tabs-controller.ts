import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { MeusProjetosPage } from '../meus-projetos/meus-projetos';
import { ProjetoPage } from '../projeto/projeto';
import { AtividadesPage } from '../atividades/atividades';
import { PerfilPage } from '../perfil/perfil';
import { AtividadesAtrasadasPage } from '../atividades-atrasadas/atividades-atrasadas';
import { MenuPage } from '../menu/menu';
import { MeusProjetosPage } from '../meus-projetos/meus-projetos';
import { PerfilPage } from '../perfil/perfil';
import { AtividadesAtrasadasPage } from '../atividades-atrasadas/atividades-atrasadas';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MenuPage;
  tab2Root: any = MeusProjetosPage;
  tab3Root: any = PerfilPage;
  tab4Root: any = AtividadesAtrasadasPage;
  constructor(public navCtrl: NavController) {
  }
  goToMenu(params){
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
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPage);
  }goToAtividadesAtrasadas(params){
    if (!params) params = {};
    this.navCtrl.push(AtividadesAtrasadasPage);
  }
}
