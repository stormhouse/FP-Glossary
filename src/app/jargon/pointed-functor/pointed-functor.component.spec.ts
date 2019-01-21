import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointedFunctorComponent } from './pointed-functor.component';

describe('PointedFunctorComponent', () => {
  let component: PointedFunctorComponent;
  let fixture: ComponentFixture<PointedFunctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointedFunctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointedFunctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
