import { InjectionToken } from "@angular/core";

export interface AppConfig {
  apiEndpoint: string;
}

export const APP_CONFIG: AppConfig = {
  apiEndpoint: 'http://swapi.co/api/'
};

export let appConfig = new InjectionToken<AppConfig>('app.config');