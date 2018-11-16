import { Component, OnInit } from '@angular/core';
import { MembresService } from '../membres.service';


@Component({
  selector: 'app-liste-membres',
  templateUrl: './liste-membres.component.html',
  styleUrls: ['./liste-membres.component.css']
})
export class ListeMembresComponent implements OnInit {
  public membres: Object[];

  constructor(private membresService: MembresService) { }

  ngOnInit() {
     this.membresService.getAllMembres().subscribe(res => this.membres = res);
  }

}
