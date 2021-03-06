import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { RechercheBiensComponent } from './recherche-biens/recherche-biens.component';
import { ListeBienComponent } from './liste-bien/liste-bien.component';
import { BiensService } from './biens.service';

const routes: Routes=[   
   {path:':bienMotCle', component: RechercheBiensComponent},
];


@NgModule({
  declarations: [ListeBienComponent, RechercheBiensComponent],
  imports : [ HttpClientModule, FormsModule, CommonModule, RouterModule.forChild(routes)],
  exports : [ListeBienComponent, RechercheBiensComponent],
  providers : [BiensService]
})
export class BiensModule { }
