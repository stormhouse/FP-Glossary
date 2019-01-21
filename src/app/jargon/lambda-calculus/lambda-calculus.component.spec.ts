import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaCalculusComponent } from './lambda-calculus.component';

describe('LambdaCalculusComponent', () => {
  let component: LambdaCalculusComponent;
  let fixture: ComponentFixture<LambdaCalculusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LambdaCalculusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaCalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
