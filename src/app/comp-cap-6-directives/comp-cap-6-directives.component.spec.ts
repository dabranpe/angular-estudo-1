import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap6DirectivesComponent } from './comp-cap-6-directives.component';

describe('CompCap6DirectivesComponent', () => {
  let component: CompCap6DirectivesComponent;
  let fixture: ComponentFixture<CompCap6DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap6DirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap6DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
