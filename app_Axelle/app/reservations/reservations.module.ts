import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { ReservationsService } from './reservations.service';
import { RechercheReservationComponent } from './recherche-reservation/recherche-reservation.component';

const routes: Routes=[
      {path:':resId', component: RechercheReservationComponent},
];

@NgModule({
declarations: [RechercheReservationComponent],
  imports: [
    HttpClientModule, CommonModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [RechercheReservationComponent],
  providers: [ReservationsService],
  bootstrap: []
})
export class ReservationsModule { }



