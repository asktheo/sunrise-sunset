import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunrisesunsetComponent } from './sunrisesunset.component';

describe('SunrisesunsetComponent', () => {
  let component: SunrisesunsetComponent;
  let fixture: ComponentFixture<SunrisesunsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunrisesunsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunrisesunsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
