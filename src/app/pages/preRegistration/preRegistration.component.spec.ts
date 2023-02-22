import { ComponentFixture, TestBed } from '@angular/core/testing';

import { preRegistrationComponent } from './preRegistration.component';

describe('PreRegistrationComponent', () => {
  let component: preRegistrationComponent;
  let fixture: ComponentFixture<preRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ preRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(preRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
