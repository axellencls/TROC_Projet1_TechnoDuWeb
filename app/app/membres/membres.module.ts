import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { RechercheMembreComponent } from './recherche-membre/recherche-membre.component';
import { MembresService } from './membres.service';

const routes: Routes=[{
	path:':email',
	component: RechercheMembreComponent
}];

@NgModule({
declarations: [ListeMembresComponent, RechercheMembreComponent],
  imports: [
    HttpClientModule, CommonModule, RouterModule.forChild(routes)
  ],
  exports: [ListeMembresComponent, RechercheMembreComponent],
  providers: [MembresService],
  bootstrap: []
})
export class MembresModule { }
