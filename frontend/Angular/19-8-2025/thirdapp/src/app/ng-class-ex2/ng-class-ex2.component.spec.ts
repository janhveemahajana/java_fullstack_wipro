import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassEx2Component } from './ng-class-ex2.component';

describe('NgClassEx2Component', () => {
  let component: NgClassEx2Component;
  let fixture: ComponentFixture<NgClassEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassEx2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
