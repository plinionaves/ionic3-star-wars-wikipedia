import { NgModule } from '@angular/core';

import { APP_CONFIG, appConfig } from './app-config.provider';
import { SwapiService } from './swapi/swapi.service';

@NgModule({
    providers: [
        SwapiService,
        { provide: appConfig, useValue: APP_CONFIG }
    ]
})
export class ServicesModule { }
