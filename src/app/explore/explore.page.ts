import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.navCtrl.navigateForward("home");
  }

  navigateToProfile() {
    this.navCtrl.navigateForward("profile");
  }

}
