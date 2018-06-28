import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Events, IonicPage } from 'ionic-angular';
import {Storage} from '@ionic/storage';


/**
 * Generated class for the ObituaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obituary',
  templateUrl: 'obituary.html',
})
export class ObituaryPage {
 galleryType = 'obituaries';
  loginModal: any;
  loggedin: boolean = false

  constructor(public navCtrl: NavController,
  	public modalCtrl: ModalController,
    public storage: Storage,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObituaryPage');
  }

}
