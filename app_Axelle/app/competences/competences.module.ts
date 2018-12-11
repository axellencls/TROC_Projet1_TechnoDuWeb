import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { RechercheCompetencesComponent } from './recherche-competences/recherche-competences.component';
import { CompetencesService } from './competences.service';
import { CreeCompetenceComponent } from './cree-competence/cree-competence.component';

const routes: Routes=[
      {path:':compMotCle', component: RechercheCompetencesComponent},
];

@NgModule({
declarations: [RechercheCompetencesComponent, CreeCompetenceComponent],
  imports: [
    HttpClientModule, CommonModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [RechercheCompetencesComponent, CreeCompetenceComponent],
  providers: [CompetencesService],
  bootstrap: []
})
export class CompetencesModule { }
