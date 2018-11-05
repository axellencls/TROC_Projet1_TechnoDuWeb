import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheCompetencesComponent } from './recherche-competences.component';

describe('RechercheCompetencesComponent', () => {
  let component: RechercheCompetencesComponent;
  let fixture: ComponentFixture<RechercheCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
