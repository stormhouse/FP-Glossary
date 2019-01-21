import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyEvaluationComponent } from './lazy-evaluation.component';

describe('LazyEvaluationComponent', () => {
  let component: LazyEvaluationComponent;
  let fixture: ComponentFixture<LazyEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
