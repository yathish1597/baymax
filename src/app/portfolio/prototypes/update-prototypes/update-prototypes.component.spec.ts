import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrototypesComponent } from './update-prototypes.component';

describe('UpdatePrototypesComponent', () => {
  let component: UpdatePrototypesComponent;
  let fixture: ComponentFixture<UpdatePrototypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePrototypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrototypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
