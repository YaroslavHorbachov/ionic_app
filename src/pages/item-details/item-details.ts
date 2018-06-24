import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  async chooseVariants() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Choose your variant');
    [
      { label: 'First', value: 'first', type: 'checkbox' },
      { label: 'Second', value: 'second', type: 'checkbox' },
      { label: 'Third', value: 'third', type: 'checkbox' },
      { label: 'Fourth', value: 'fourth', type: 'checkbox' },
      { label: 'Fifth', value: 'fifth', type: 'checkbox' },
      { label: 'Sixth', value: 'sixth', type: 'checkbox' }
    ].forEach(el => alert.addInput(el));

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Confirm',
      handler: data => console.log(data)
    });
    await alert.present();
    console.log('Present');
  }
}
