import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurryingComponent } from './currying.component';

describe('CurryingComponent', () => {
  let component: CurryingComponent;
  let fixture: ComponentFixture<CurryingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurryingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
