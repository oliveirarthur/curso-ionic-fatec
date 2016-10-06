import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Detalhes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {

  private obj:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.obj = navParams.data['obj'];
  }

  ionViewDidLoad() {
  }

}
