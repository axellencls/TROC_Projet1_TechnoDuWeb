import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheBiensComponent } from './recherche-biens.component';

describe('RechercheBiensComponent', () => {
  let component: RechercheBiensComponent;
  let fixture: ComponentFixture<RechercheBiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheBiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
