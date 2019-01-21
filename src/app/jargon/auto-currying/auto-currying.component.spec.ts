import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCurryingComponent } from './auto-currying.component';

describe('AutoCurryingComponent', () => {
  let component: AutoCurryingComponent;
  let fixture: ComponentFixture<AutoCurryingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCurryingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCurryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
