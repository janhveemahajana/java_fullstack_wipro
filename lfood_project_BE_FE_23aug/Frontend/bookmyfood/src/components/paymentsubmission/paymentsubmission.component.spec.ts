import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsubmissionComponent } from './paymentsubmission.component';

describe('PaymentsubmissionComponent', () => {
  let component: PaymentsubmissionComponent;
  let fixture: ComponentFixture<PaymentsubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
