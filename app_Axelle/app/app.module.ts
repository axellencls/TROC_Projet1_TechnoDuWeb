import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from "angular2-image-upload";

import { MembresModule } from './membres/membres.module';
import { BiensModule } from './biens/biens.module';
import { AppComponent } from './app.component';
import { CompetencesModule } from './competences/competences.module';
import { ReservationsModule } from './reservations/reservations.module';

const routes : Routes=[
	{
		path:'membres',
		loadChildren: './membres/membres.module#MembresModule'	
	},
	{
		path:'competences',
		loadChildren: './competences/competences.module#CompetencesModule'
	},
		{
		path:'biens',
		loadChildren: './biens/biens.module#BiensModule'
	},
		{
		path:'reservations',
		loadChildren: './reservations/reservations.module#ReservationsModule'
	}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MembresModule,
    BiensModule,
    FormsModule,
    CompetencesModule,
    ReservationsModule,
    RouterModule.forRoot(routes),
    ImageUploadModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
