import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeCompetenceComponent } from './cree-competence.component';

describe('CreeCompetenceComponent', () => {
  let component: CreeCompetenceComponent;
  let fixture: ComponentFixture<CreeCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreeCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
