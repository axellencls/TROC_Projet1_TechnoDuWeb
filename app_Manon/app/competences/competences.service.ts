import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CompetencesService {

  constructor(private http: HttpClient) { }

  getCompetencesWithKeyWord(parametre) :Observable<any> {
    let url =  "http://localhost:8888/competences/"+parametre;
     console.log("Dans service comptences.service.ts avec "+url);
     return this.http.get(url);
     }	    
}
