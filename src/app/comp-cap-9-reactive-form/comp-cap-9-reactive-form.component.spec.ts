import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap9ReactiveFormComponent } from './comp-cap-9-reactive-form.component';

describe('CompCap9ReactiveFormComponent', () => {
  let component: CompCap9ReactiveFormComponent;
  let fixture: ComponentFixture<CompCap9ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap9ReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap9ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
