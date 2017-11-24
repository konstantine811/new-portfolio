import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LangService{
  constructor(private http:Http) {
    console.log('Lang Service Initialized...');
  }

  getLanguages(){
    return this.http.get('http://localhost:3000/api/lang')
      .map(res => res.json());
  }
}
