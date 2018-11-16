import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MembresService {
       
  constructor(private http: HttpClient) { }

  getAllMembres(): Observable<any> {
     let url =  "http://localhost:8888/membres";
     console.log("Dans service membres.service.ts avec "+url);
     return this.http.get(url);
  }
  
  getOneMembre(parametre): Observable<any> {
     let url =  "http://localhost:8888/membres/"+parametre;
     console.log("Dans service membres.service.ts avec "+url);
     return this.http.get(url);
	}
	
  addMembre(membre) : Observable<any> {
     let url =  "http://localhost:8888/membres/add/"+membre;
     console.log("Dans service membres.service.ts avec "+url);
     return this.http.get(url);
   }
}
