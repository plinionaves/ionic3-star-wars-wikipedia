import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { SwapiService } from './../../providers/swapi/swapi.service';

@IonicPage()
@Component({
  selector: 'page-resource',
  templateUrl: 'resource.html',
})
export class ResourcePage {

  resourceName: string = '';
  resourceUri: string = '';
  pageItem$: Observable<Object>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public swapiService: SwapiService
  ) {}

  ionViewDidLoad() {
    this.resourceName = this.navParams.get('resourceName');
    this.resourceUri = this.navParams.get('resourceUri');    
    
    this.pageItem$ = this.swapiService.getResource(this.resourceUri);
  }

  onDetail(item: Object): void {
    this.navCtrl.push('DetailPage', {
      item: item
    });
  }

}
