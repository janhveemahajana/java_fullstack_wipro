import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleEx4Component } from './ng-style-ex4.component';

describe('NgStyleEx4Component', () => {
  let component: NgStyleEx4Component;
  let fixture: ComponentFixture<NgStyleEx4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleEx4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleEx4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
