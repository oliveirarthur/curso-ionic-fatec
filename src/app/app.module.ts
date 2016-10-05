import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { RecentesPage } from '../pages/recentes/recentes';
import { TabsPage } from '../pages/tabs/tabs';
import { DetalhesPage } from '../pages/detalhes/detalhes';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FavoritosPage,
    RecentesPage,
    TabsPage,
    DetalhesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FavoritosPage,
    RecentesPage,
    TabsPage,
    DetalhesPage
  ],
  providers: []
})
export class AppModule {}
