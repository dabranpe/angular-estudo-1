import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap5ChildComponent } from './comp-cap-5-child.component';

describe('CompCap5ChildComponent', () => {
  let component: CompCap5ChildComponent;
  let fixture: ComponentFixture<CompCap5ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap5ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
