import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/first';

import { SwapiService } from './../../providers/swapi/swapi.service';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  item: Object;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public swapiService: SwapiService
  ) {}

  ionViewCanEnter() {
    this.item = this.navParams.get('item');    
  }

  viewResource(resourceUri: string): void {
    this.swapiService.getResource(resourceUri)
      .first()
      .subscribe((item: Object) => {
        this.navCtrl.push('DetailPage', {
          item: item
        });
      });
  }

}
