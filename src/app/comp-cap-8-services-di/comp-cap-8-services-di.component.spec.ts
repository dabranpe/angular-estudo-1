import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap8ServicesDiComponent } from './comp-cap-8-services-di.component';

describe('CompCap8ServicesDiComponent', () => {
  let component: CompCap8ServicesDiComponent;
  let fixture: ComponentFixture<CompCap8ServicesDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap8ServicesDiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap8ServicesDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
