import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PipesModule } from './../../pipes/pipes.module';
import { ResourcePage } from './resource';

@NgModule({
  declarations: [ ResourcePage ],
  imports: [ 
    IonicPageModule.forChild(ResourcePage),
    PipesModule
  ]
})
export class ResourcePageModule {}
