import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPagGeralComponent } from './comp-pag-geral.component';

describe('CompPagGeralComponent', () => {
  let component: CompPagGeralComponent;
  let fixture: ComponentFixture<CompPagGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompPagGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompPagGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
