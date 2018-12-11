import { Component, OnInit } from '@angular/core';
import {CompetencesService} from '../competences.service';
import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recherche-competences',
  templateUrl: './recherche-competences.component.html',
  styleUrls: ['./recherche-competences.component.css']
})
export class RechercheCompetencesComponent {
       public competences: Object[];

  constructor(private competencesService : CompetencesService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe(params=>{
  console.log("Recherche competence component,  params.compMotCle : "+params.compMotCle);
	this.competencesService.getCompetencesWithKeyWord(params.compMotCle).subscribe(res => this.competences = res);
		});
  }
}
