import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContriesComponent } from './countries.component';

describe('ContriesComponent', () => {
  let component: ContriesComponent;
  let fixture: ComponentFixture<ContriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
