import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationalReasoningComponent } from './equational-reasoning.component';

describe('EquationalReasoningComponent', () => {
  let component: EquationalReasoningComponent;
  let fixture: ComponentFixture<EquationalReasoningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationalReasoningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationalReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
