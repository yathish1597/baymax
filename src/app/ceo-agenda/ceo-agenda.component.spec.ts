import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoAgendaComponent } from './ceo-agenda.component';

describe('CeoAgendaComponent', () => {
  let component: CeoAgendaComponent;
  let fixture: ComponentFixture<CeoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
