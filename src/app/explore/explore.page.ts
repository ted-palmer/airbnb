import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing} from  '../models/listing.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  listing: Listing[];

  constructor(private navCtrl: NavController) { 
    this.listing = [];
    this.listing.push(new Listing(1,'Apartment in Cape Town', 'Cape Town', 750, 'https://www.uaces.org/images/events/lisbon-old-town.jpeg'));
    this.listing.push(new Listing(1,'Apartment in Lisbon', 'Lisbon', 300, 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Lisbon/Lisbon---Itineraries---View-to-bridge.jpg?imwidth=450'));
  }

  ngOnInit() {
  }

  navigateToHome() {
    this.navCtrl.navigateForward("home");
  }

  navigateToProfile() {
    this.navCtrl.navigateForward("profile");
  }

  navigateToExplore() {
    this.navCtrl.navigateForward("explore");
  }

  navigateToNewListing() {
    this.navCtrl.navigateForward("new-listing");
  }

}
