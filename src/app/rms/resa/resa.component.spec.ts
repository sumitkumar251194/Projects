import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RESAComponent } from './resa.component';

describe('RESAComponent', () => {
  let component: RESAComponent;
  let fixture: ComponentFixture<RESAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RESAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RESAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
