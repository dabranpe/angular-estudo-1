import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap10RoutingComponent } from './comp-cap-10-routing.component';

describe('CompCap10RoutingComponent', () => {
  let component: CompCap10RoutingComponent;
  let fixture: ComponentFixture<CompCap10RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap10RoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap10RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
