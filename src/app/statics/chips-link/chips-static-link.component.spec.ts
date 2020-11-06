import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticChipsLinkComponent } from './chips-static-link.component';

describe('StaticChipsLinkComponent', () => {
  let component: StaticChipsLinkComponent;
  let fixture: ComponentFixture<StaticChipsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticChipsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticChipsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
