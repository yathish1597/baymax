import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Backlog1Component } from './backlog1.component';

describe('Backlog1Component', () => {
  let component: Backlog1Component;
  let fixture: ComponentFixture<Backlog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Backlog1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Backlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
