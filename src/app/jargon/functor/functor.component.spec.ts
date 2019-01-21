import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctorComponent } from './functor.component';

describe('FunctorComponent', () => {
  let component: FunctorComponent;
  let fixture: ComponentFixture<FunctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
