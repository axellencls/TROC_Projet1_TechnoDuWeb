import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ReservationsService {

  constructor(private http: HttpClient) { }

  getReservationWithId(parametre) :Observable<any> {
    let url =  "http://localhost:8888/reservations/"+parametre;
         console.log("Dans recherche reservation.service.ts avec "+url);
     return this.http.get(url);
     }	    
}