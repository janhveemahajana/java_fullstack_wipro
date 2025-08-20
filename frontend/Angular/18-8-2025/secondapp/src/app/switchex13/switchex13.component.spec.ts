import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchex13Component } from './switchex13.component';

describe('Switchex13Component', () => {
  let component: Switchex13Component;
  let fixture: ComponentFixture<Switchex13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchex13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchex13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
