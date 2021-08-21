import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilitiesListComponent } from './possibilities-list.component';

describe('PossibilitiesListComponent', () => {
  let component: PossibilitiesListComponent;
  let fixture: ComponentFixture<PossibilitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibilitiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
