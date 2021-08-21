import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsourcesComponent } from './leadsources.component';

describe('LeadsourcesComponent', () => {
  let component: LeadsourcesComponent;
  let fixture: ComponentFixture<LeadsourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
