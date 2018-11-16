import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembresService } from '../membres.service';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription-membre',
  templateUrl: './inscription-membre.component.html',
  styleUrls: ['./inscription-membre.component.css']
})
export class InscriptionMembreComponent {
       public membres: Object[];
      // public vuesEchanges=false;
       public email: string;
       public mdp: string;
       public nom: string;
       public prenom: string;
       public role: string="0"; // INT ???
       public ville: string;
       public adresse: string;
       public tel: string;
       public dejaInscrit = false;
  constructor(private membresService : MembresService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  //soumission du formulaire par l'utilisateur
  onSubmit(inscriptionForm: NgForm) {
     if(inscriptionForm.valid) {
     //this.vuesEchanges=true;
     //recupere les saisies
     let emailSaisi = inscriptionForm.controls['email'].value
     let mdpSaisi = inscriptionForm.controls['mdp'].value
     let nomSaisi = inscriptionForm.controls['nom'].value
     let prenomSaisi = inscriptionForm.controls['prenom'].value
     let roleSaisi = inscriptionForm.controls['role'].value
     let villeSaisi = inscriptionForm.controls['ville'].value
     let adresseSaisi = inscriptionForm.controls['adresse'].value
     let telSaisi = inscriptionForm.controls['tel'].value
  	     //verification que l'utilisateur ne soit pas deja inscrit (verification de lemail via getOneMembre())
	     console.log("onSubmit");
  	     this.route.params.subscribe(params=>{
	     	     console.log("avant demande getOneMembre avec email : "+emailSaisi);
			this.membresService.getOneMembre(emailSaisi).subscribe(res =>
			{this.membres = res;
			if (this.membres[0] != null) {
			console.log("Membre retrouve : "+this.membres[0]);		
			console.log("Utilisateur deja inscrit");
			   this.dejaInscrit = true; //utilisateur deja inscrit !
			   }else {
			   console.log("Membre PAS INSCRIT : inscription en cours");
			   let membreAajouter = [emailSaisi, mdpSaisi,nomSaisi, prenomSaisi, roleSaisi, villeSaisi, adresseSaisi, telSaisi]
			   this.membresService.addMembre(membreAajouter).subscribe(res =>
			{
			console.log(res);
			   console.log("appli : membre bien ajoute");});
}

			});
		});
					   		
		}
  }

}
