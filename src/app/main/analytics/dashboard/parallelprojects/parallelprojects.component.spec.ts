import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelprojectsComponent } from './parallelprojects.component';

describe('ParallelprojectsComponent', () => {
  let component: ParallelprojectsComponent;
  let fixture: ComponentFixture<ParallelprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallelprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
