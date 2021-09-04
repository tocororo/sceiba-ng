import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkStaticComponent } from './link-static.component';

describe('LinkStaticComponent', () => {
  let component: LinkStaticComponent;
  let fixture: ComponentFixture<LinkStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
