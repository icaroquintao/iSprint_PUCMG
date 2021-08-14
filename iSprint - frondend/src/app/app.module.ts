import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { AdministradorPage } from '../pages/administrador/administrador';
import { CadastrarNovoUsuRioPage } from '../pages/cadastrar-novo-usu-rio/cadastrar-novo-usu-rio';
import { MenuPage } from '../pages/menu/menu';
import { MeusProjetosPage } from '../pages/meus-projetos/meus-projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { AtividadesPage } from '../pages/atividades/atividades';
import { AtividadesAtrasadasPage } from '../pages/atividades-atrasadas/atividades-atrasadas';
import { PerfilPage } from '../pages/perfil/perfil';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    LoginPage,
    AdministradorPage,
    CadastrarNovoUsuRioPage,
    MenuPage,
    MeusProjetosPage,
    ProjetoPage,
    AtividadesPage,
    AtividadesAtrasadasPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    LoginPage,
    AdministradorPage,
    CadastrarNovoUsuRioPage,
    MenuPage,
    MeusProjetosPage,
    ProjetoPage,
    AtividadesPage,
    AtividadesAtrasadasPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}