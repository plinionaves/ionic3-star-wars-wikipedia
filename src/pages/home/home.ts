import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { SwapiService } from './../../providers/swapi/swapi.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resources$: Observable<Object>;

  constructor(
    public navCtrl: NavController,
    public swapiService: SwapiService
  ) {}

  ionViewDidLoad() {    
    this.resources$ = this.swapiService.getRoot();
  }

  onResource(resourceName: string, resourceUri: string): void {    
    this.navCtrl.push('ResourcePage', {
      resourceName: resourceName,
      resourceUri: resourceUri
    });
  }

}
