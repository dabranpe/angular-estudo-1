import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap11HttpObservableComponent } from './comp-cap-11-http-observable.component';

describe('CompCap11HttpObservableComponent', () => {
  let component: CompCap11HttpObservableComponent;
  let fixture: ComponentFixture<CompCap11HttpObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap11HttpObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap11HttpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
