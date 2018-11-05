import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { RechercheBiensComponent } from './recherche-biens/recherche-biens.component';
import { BiensService } from './biens.service';

const routes: Routes=[
      
];

@NgModule({
declarations: [RechercheBiensComponent],
  imports: [
    HttpClientModule, CommonModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [RechercheBiensComponent],
  providers: [BiensService],
  bootstrap: []
})
export class BiensModule { }

