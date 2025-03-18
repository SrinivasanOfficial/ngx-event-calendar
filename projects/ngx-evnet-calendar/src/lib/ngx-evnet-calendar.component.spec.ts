import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEvnetCalendarComponent } from './ngx-evnet-calendar.component';

describe('NgxEvnetCalendarComponent', () => {
  let component: NgxEvnetCalendarComponent;
  let fixture: ComponentFixture<NgxEvnetCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEvnetCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEvnetCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
