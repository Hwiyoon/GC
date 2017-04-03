/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AttendencelistpageComponent } from './attendencelistpage.component';

describe('AttendencelistpageComponent', () => {
  let component: AttendencelistpageComponent;
  let fixture: ComponentFixture<AttendencelistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendencelistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendencelistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
