/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QnaComponent } from './qna.component';

describe('QnaComponent', () => {
  let component: QnaComponent;
  let fixture: ComponentFixture<QnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
