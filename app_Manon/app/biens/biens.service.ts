import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BiensService {
       
  constructor(private http: HttpClient) { }

  getAllBiens(): Observable<any> {
     let url =  "http://localhost:8888/biens";
     console.log("Dans service biens.service.ts avec "+url);
     return this.http.get(url);
  }
  
  getBiensWithKeyWord(parametre) :Observable<any> {
  	 let url =  "http://localhost:8888/biens/"+parametre;
     return this.http.get(url);
  }

}
