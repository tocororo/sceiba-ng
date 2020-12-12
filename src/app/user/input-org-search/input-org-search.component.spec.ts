import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputOrgSearchComponent } from './input-org-search.component';



describe('OrgSearchComponent', () => {
  let component: InputOrgSearchComponent;
  let fixture: ComponentFixture<InputOrgSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOrgSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOrgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
