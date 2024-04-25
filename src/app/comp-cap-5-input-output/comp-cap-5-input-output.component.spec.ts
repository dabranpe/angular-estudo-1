import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap5InputOutputComponent } from './comp-cap-5-input-output.component';

describe('CompCap5InputOutputComponent', () => {
  let component: CompCap5InputOutputComponent;
  let fixture: ComponentFixture<CompCap5InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap5InputOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap5InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
