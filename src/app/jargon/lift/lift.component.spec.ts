import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftComponent } from './lift.component';

describe('LiftComponent', () => {
  let component: LiftComponent;
  let fixture: ComponentFixture<LiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
