import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';
import { SeriesProvider } from '../../providers/series-provider';

/*
  Generated class for the Series page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-series',
  templateUrl: 'series.html'
})
export class SeriesPage {

  private query:string;
  private series:Array<any>;

  constructor(public navCtrl: NavController,
              public seriesProvider: SeriesProvider) {}

  ionViewDidLoad() {
    console.log('Hello Series Page');
  }

  search() {
    this.seriesProvider
        .search(this.query)
        .then((data) => {
          this.series = data.results;
        }).catch(() => {
          this.series = [];
        });
  }

  goToDetalhes(serie) {
    this.navCtrl.push(DetalhesPage,{
      obj: serie
    });//push coloca a classe no topo da pilha, e pop retira
  }
}
