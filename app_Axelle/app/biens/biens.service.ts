import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BiensService {

  constructor(private http: HttpClient) { }

  getBiensWithKeyWords(parametre) :Observable<any> {
    let url =  "http://localhost:8888/biens";
     return this.http.get(url);
     }	    
}