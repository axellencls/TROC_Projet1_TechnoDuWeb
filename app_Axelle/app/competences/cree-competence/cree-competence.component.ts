import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencesService } from '../competences.service';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cree-competence',
  templateUrl: './cree-competence.component.html',
  styleUrls: ['./cree-competence.component.css']
})
export class CreeCompetenceComponent {
       public dejaExistant = false; //A MODIFIER 
  constructor(private competencesService : CompetencesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

//soumission du formulaire par l'utilisateur
  onSubmit(competenceForm: NgForm) {
  	if(competenceForm.valid) {
	
	//recupere les saisies
	var motsClesSaisis = competenceForm.controls['motsCles'].value
	var prixSaisi =  competenceForm.controls['prix'].value
	var descriptionSaisie = competenceForm.controls['description'].value
	var emailProprioSaisi =competenceForm.controls['emailProprio'].value
	var ld = competenceForm.controls['lundi_de'].value;
	var la = competenceForm.controls['lundi_a'].value;
	var mardid = competenceForm.controls['mardi_de'].value;
	var mardia = competenceForm.controls['mardi_a'].value;
	var mercredid = competenceForm.controls['mercredi_de'].value;
	var mercredia = competenceForm.controls['mercredi_a'].value
	var jeudid = competenceForm.controls['jeudi_de'].value;
	var jeudia = competenceForm.controls['jeudi_a'].value
	var vendredid = competenceForm.controls['vendredi_de'].value;
	var vendredia = competenceForm.controls['vendredi_a'].value
	var samedid = competenceForm.controls['samedi_de'].value;
	var samedia = competenceForm.controls['samedi_a'].value
	var dimanched = competenceForm.controls['dimanche_de'].value;
	var dimanchea = competenceForm.controls['dimanche_a'].value

	var horaire = []

	//creation des horaires type dico de dico d'un tableau
	//si utilisateur est libre le lundi
	if (ld != null && la != null) {
	   horaire.push({"lundi":[{"debut":ld, "fin":la}]});
	}
	//le mardi
	if (mardid != null && mardia != null) {
	   horaire.push({"mardi":[{"debut":mardid, "fin":mardia}]});
	}
	if (mercredid != null && mercredia != null) {
	   horaire.push({"mercredi":[{"debut":mercredid, "fin":mercredia}]});
	}
	if (jeudid != null && jeudia != null) {
	   horaire.push({"jeudi":[{"debut":jeudid, "fin":jeudia}]});
	}
	if (vendredid != null && vendredia != null) {
	   horaire.push({"vendredi":[{"debut":vendredid, "fin":vendredia}]});
	}
	if (samedid != null && samedia != null) {
	   horaire.push({"samedi":[{"debut":samedid, "fin":samedia}]});
	}
	if (dimanched != null && dimanchea != null) {
	   horaire.push({"dimanche":[{"debut":dimanched, "fin":dimanchea}]});
	}

	console.log("HORAIRE : "+horaire);
	var id = "C";
	//la competence a ajouter
	//var competenceAjouter = [id, motsClesSaisis, photoSaisie,prixSaisi, emailProprioSaisi, horaire];
	var competenceAjouter = [];

	//premier appel au service pour comptes les competences afin d'avoir un id unique
	this.competencesService.getCountCompetences().subscribe(res =>
	{
	res += 1; //le nouvel id sera nombre de bien + 1
	id += res;
	console.log("ID COMP INCREMENTE : "+id);
	competenceAjouter = [id,emailProprioSaisi, motsClesSaisis, descriptionSaisie,prixSaisi, horaire, prixSaisi];
	//appel service pour ajout
	this.competencesService.addCompetences(competenceAjouter).subscribe(res=>{
		console.log(res);
		console.log("competence ajoute !!");
	});
	});
}
}

}
