import { Component, OnInit } from '@angular/core';
import {ReservationsService} from '../reservations.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recherche-reservation',
  templateUrl: './recherche-reservation.component.html',
  styleUrls: ['./recherche-reservation.component.css']
})
export class RechercheReservationComponent{
       public reservation: Object[];
  constructor(private reservationsService : ReservationsService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe(params=>{
  console.log("Recherche reservation component,  params.resId : "+params.resId);
	this.reservationsService.getReservationWithId(params.resId).subscribe(res => this.reservation = res);
		});
  }

}
