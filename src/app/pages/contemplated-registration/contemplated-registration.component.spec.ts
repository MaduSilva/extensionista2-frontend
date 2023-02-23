import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemplatedRegistrationComponent } from './contemplated-registration.component';

describe('ContemplatedRegistrationComponent', () => {
  let component: ContemplatedRegistrationComponent;
  let fixture: ComponentFixture<ContemplatedRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemplatedRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContemplatedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
