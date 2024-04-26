import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap9TemplateDrivenFormComponent } from './comp-cap-9-template-driven-form.component';

describe('CompCap9TemplateDrivenFormComponent', () => {
  let component: CompCap9TemplateDrivenFormComponent;
  let fixture: ComponentFixture<CompCap9TemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap9TemplateDrivenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap9TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
