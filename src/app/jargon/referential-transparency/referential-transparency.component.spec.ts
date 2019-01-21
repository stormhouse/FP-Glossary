import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentialTransparencyComponent } from './referential-transparency.component';

describe('ReferentialTransparencyComponent', () => {
  let component: ReferentialTransparencyComponent;
  let fixture: ComponentFixture<ReferentialTransparencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferentialTransparencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferentialTransparencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
