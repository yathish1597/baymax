import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstcontactComponent } from './constcontact.component';

describe('ConstcontactComponent', () => {
  let component: ConstcontactComponent;
  let fixture: ComponentFixture<ConstcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
