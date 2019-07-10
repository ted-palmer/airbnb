import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {NavProviderService} from '../service/nav-provider.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;


  constructor(private navCtrl: NavController) {

}

navigateToProfile() {
  // debugger;
  // this.navProvider.setName(this.name);
  this.navCtrl.navigateForward("profile");
}

navigateToExplore() {
  this.navCtrl.navigateForward("explore");
}

}