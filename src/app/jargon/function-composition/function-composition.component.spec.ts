import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCompositionComponent } from './function-composition.component';

describe('FunctionCompositionComponent', () => {
  let component: FunctionCompositionComponent;
  let fixture: ComponentFixture<FunctionCompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionCompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
