import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdempotentComponent } from './idempotent.component';

describe('IdempotentComponent', () => {
  let component: IdempotentComponent;
  let fixture: ComponentFixture<IdempotentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdempotentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdempotentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
