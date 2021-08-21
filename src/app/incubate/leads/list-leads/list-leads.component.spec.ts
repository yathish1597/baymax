import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeadsComponent } from './list-leads.component';

describe('ListLeadsComponent', () => {
  let component: ListLeadsComponent;
  let fixture: ComponentFixture<ListLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLeadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
