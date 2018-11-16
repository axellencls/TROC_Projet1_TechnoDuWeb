import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheReservationComponent } from './recherche-reservation.component';

describe('RechercheReservationComponent', () => {
  let component: RechercheReservationComponent;
  let fixture: ComponentFixture<RechercheReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
