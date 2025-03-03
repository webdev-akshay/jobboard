import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparySalariesComponent } from './compary-salaries.component';

describe('ComparySalariesComponent', () => {
  let component: ComparySalariesComponent;
  let fixture: ComponentFixture<ComparySalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparySalariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparySalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
