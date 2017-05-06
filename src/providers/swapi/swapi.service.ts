import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from "rxjs/Observable";

import { AppConfig, appConfig } from './../app-config.provider';

@Injectable()
export class SwapiService {

  constructor(
    @Inject(appConfig) public appConfig: AppConfig,
    public http: Http
  ) { }

  getRoot(): Observable<Object> {
    return this.http.get(this.appConfig.apiEndpoint)
      .map((res: Response) => res.json());
  }

  getResource(resourceUri: string): Observable<Object> {
    return this.http.get(resourceUri)
      .map((res: Response) => res.json());
  }

}
