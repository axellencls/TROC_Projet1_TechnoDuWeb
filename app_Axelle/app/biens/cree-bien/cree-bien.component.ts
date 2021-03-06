import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiensService } from '../biens.service';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cree-bien',
  templateUrl: './cree-bien.component.html',
  styleUrls: ['./cree-bien.component.css']
})
export class CreeBienComponent{
       public dejaExistant = false;

constructor(private biensService : BiensService, private route: ActivatedRoute) {
}

  ngOnInit() {
  }

  //soumission du formulaire par l'utilisateur
  onSubmit(bienForm: NgForm) {
  	if(bienForm.valid) {
	
	//recupere les saisies
	var motsClesSaisis = bienForm.controls['motsCles'].value
	var prixSaisi =  bienForm.controls['prix'].value
	var photoSaisie = bienForm.controls['image'].value
	var emailProprioSaisi =bienForm.controls['emailProprio'].value
	var dispo = 0;
	var id = "B";
	//bien a ajouter
	//var bienAjouter = [id, motsClesSaisis, photoSaisie,prixSaisi, emailProprioSaisi, dispo];
	var bienAjouter = [];
	console.log(bienAjouter);

	//premier appel au service pour comptes les biens afin d'avoir un id unique
	this.biensService.getCountBiens().subscribe(res =>
	{
	res += 1; //le nouvel id sera nombre de bien + 1
	id += res;
	console.log("ID INCREMENTE : "+id);
	bienAjouter = [id, motsClesSaisis, photoSaisie,prixSaisi, emailProprioSaisi, dispo];
	//appel service pour ajout
	this.biensService.addBien(bienAjouter).subscribe(res=>{
		console.log(res);
		console.log("bien ajoute !!");
	});
	});
}
}
}