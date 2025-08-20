import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcompcommandComponent } from './secondcompcommand.component';

describe('SecondcompcommandComponent', () => {
  let component: SecondcompcommandComponent;
  let fixture: ComponentFixture<SecondcompcommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondcompcommandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcompcommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
