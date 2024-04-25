import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCap5InitDestroyComponent } from './comp-cap-5-init-destroy.component';

describe('CompCap5InitDestroyComponent', () => {
  let component: CompCap5InitDestroyComponent;
  let fixture: ComponentFixture<CompCap5InitDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompCap5InitDestroyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompCap5InitDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
