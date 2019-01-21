import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosureComponent } from './closure.component';

describe('ClosureComponent', () => {
  let component: ClosureComponent;
  let fixture: ComponentFixture<ClosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
