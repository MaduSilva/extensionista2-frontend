import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContemplatedComponent } from './form-contemplated.component';

describe('FormContemplatedComponent', () => {
  let component: FormContemplatedComponent;
  let fixture: ComponentFixture<FormContemplatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContemplatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContemplatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
