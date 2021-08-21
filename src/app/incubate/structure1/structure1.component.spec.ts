import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Structure1Component } from './structure1.component';

describe('Structure1Component', () => {
  let component: Structure1Component;
  let fixture: ComponentFixture<Structure1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Structure1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Structure1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
