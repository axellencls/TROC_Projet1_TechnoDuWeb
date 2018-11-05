import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MembresModule } from './membres/membres.module';
import { AppComponent } from './app.component';
import { BiensModule } from './biens/biens.module';
import { CompetencesModule } from './competences/competences.module';
import { ReservationsModule } from './reservations/reservations.module';

const routes : Routes=[
	{path:'membres', loadChildren: './membres/membres.module#MembresModule'	}, {path:'competences', loadChildren: './competences/competences.module#CompetencesModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MembresModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
