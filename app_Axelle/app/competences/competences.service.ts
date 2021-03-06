import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CompetencesService {
  constructor(private http: HttpClient) { }

  getHours() : number[] {
  	     return [8, 9, 10];
  }

  getCompetencesWithKeyWord(parametre) :Observable<any> {
    let url =  "http://localhost:8888/competences/"+parametre;
     console.log("Dans service comptences.service.ts avec "+url);
     return this.http.get(url);
     }

     getCountCompetences() : Observable<any> {
  	 let url =  "http://localhost:8888/competences/count/";
     return this.http.get(url);
  }

  addCompetences(parametre):Observable<any>{
  let url =  "http://localhost:8888/competences/add/"+parametre;
     return this.http.get(url);
}
}
