import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmComponent } from './ppm.component';

describe('PpmComponent', () => {
  let component: PpmComponent;
  let fixture: ComponentFixture<PpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
