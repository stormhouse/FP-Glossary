import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurityComponent } from './purity.component';

describe('PurityComponent', () => {
  let component: PurityComponent;
  let fixture: ComponentFixture<PurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
