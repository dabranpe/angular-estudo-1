import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap10Routing2Component } from './comp-cap-10-routing-2.component';

describe('CompCap10Routing2Component', () => {
  let component: CompCap10Routing2Component;
  let fixture: ComponentFixture<CompCap10Routing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap10Routing2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap10Routing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
