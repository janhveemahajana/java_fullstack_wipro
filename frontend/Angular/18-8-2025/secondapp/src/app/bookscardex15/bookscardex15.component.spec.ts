import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookscardex15Component } from './bookscardex15.component';

describe('Bookscardex15Component', () => {
  let component: Bookscardex15Component;
  let fixture: ComponentFixture<Bookscardex15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookscardex15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookscardex15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
