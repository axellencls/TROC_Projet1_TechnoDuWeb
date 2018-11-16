import { Component, OnInit } from '@angular/core';
import { BiensService } from '../biens.service';

@Component({
  selector: 'app-liste-bien',
  templateUrl: './liste-bien.component.html',
  styleUrls: ['./liste-bien.component.css']
})
export class ListeBienComponent implements OnInit {
  public biens: Object[];
  
  constructor(private biensService: BiensService) { }

  ngOnInit() {
  	this.biensService.getAllBiens().subscribe(res => this.biens = res);
  }

}
