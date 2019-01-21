import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointFreeStyleComponent } from './point-free-style.component';

describe('PointFreeStyleComponent', () => {
  let component: PointFreeStyleComponent;
  let fixture: ComponentFixture<PointFreeStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointFreeStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointFreeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
