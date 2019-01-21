import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaComponent } from './lambda.component';

describe('LambdaComponent', () => {
  let component: LambdaComponent;
  let fixture: ComponentFixture<LambdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LambdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
