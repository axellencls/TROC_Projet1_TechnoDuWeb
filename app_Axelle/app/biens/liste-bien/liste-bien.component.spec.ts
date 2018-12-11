import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBienComponent } from './liste-bien.component';

describe('ListeBienComponent', () => {
  let component: ListeBienComponent;
  let fixture: ComponentFixture<ListeBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
