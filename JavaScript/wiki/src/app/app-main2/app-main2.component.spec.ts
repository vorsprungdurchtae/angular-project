import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMain2Component } from './app-main2.component';

describe('AppMain2Component', () => {
  let component: AppMain2Component;
  let fixture: ComponentFixture<AppMain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMain2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
