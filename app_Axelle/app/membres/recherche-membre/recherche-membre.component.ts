import { Component, Input } from '@angular/core';
import {MembresService} from '../membres.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recherche-membre',
  templateUrl: './recherche-membre.component.html',
  styleUrls: ['./recherche-membre.component.css']
})
export class RechercheMembreComponent {
	public membres: Object[];
	

	constructor(private membresService : MembresService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(params=>{
			console.log("Dans recherche membres avec " + params.email );
			this.membresService.getOneMembre(params.email).subscribe(res => this.membres = res);
		});
		
	}

}
