import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPMComponent } from './rpm.component';

describe('RPMComponent', () => {
  let component: RPMComponent;
  let fixture: ComponentFixture<RPMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
