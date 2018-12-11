import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeBienComponent } from './cree-bien.component';

describe('CreeBienComponent', () => {
  let component: CreeBienComponent;
  let fixture: ComponentFixture<CreeBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreeBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
