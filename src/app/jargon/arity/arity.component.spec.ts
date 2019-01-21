import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArityComponent } from './arity.component';

describe('ArityComponent', () => {
  let component: ArityComponent;
  let fixture: ComponentFixture<ArityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
