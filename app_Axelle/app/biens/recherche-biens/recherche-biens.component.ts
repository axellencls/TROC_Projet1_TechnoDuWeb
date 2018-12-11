import { Component, OnInit } from '@angular/core';
import { BiensService} from '../biens.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recherche-biens',
  templateUrl: './recherche-biens.component.html',
  styleUrls: ['./recherche-biens.component.css']
})
export class RechercheBiensComponent {
	public biens: Object[];
	

	constructor(private biensService : BiensService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(params=>{
			console.log("Dans recherche biens avec " + params.bienMotCle );
			this.biensService.getBiensWithKeyWord(params.bienMotCle).subscribe(res => this.biens = res);
		});
		
	}

}
