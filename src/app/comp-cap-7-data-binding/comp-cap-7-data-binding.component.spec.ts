import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap7DataBindingComponent } from './comp-cap-7-data-binding.component';

describe('CompCap7DataBindingComponent', () => {
  let component: CompCap7DataBindingComponent;
  let fixture: ComponentFixture<CompCap7DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap7DataBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap7DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
