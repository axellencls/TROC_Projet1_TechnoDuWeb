import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { RechercheMembreComponent } from './recherche-membre/recherche-membre.component';
import { MembresService } from './membres.service';
import { InscriptionMembreComponent } from './inscription-membre/inscription-membre.component';

const routes: Routes=[   
   {path:':email', component: RechercheMembreComponent}
   ];

@NgModule({
declarations: [ListeMembresComponent, RechercheMembreComponent, InscriptionMembreComponent],
  imports: [
    HttpClientModule, CommonModule, RouterModule.forChild(routes), FormsModule
  ],
  exports: [ListeMembresComponent, RechercheMembreComponent, InscriptionMembreComponent],
  providers: [MembresService],
  bootstrap: []
})
export class MembresModule { }
