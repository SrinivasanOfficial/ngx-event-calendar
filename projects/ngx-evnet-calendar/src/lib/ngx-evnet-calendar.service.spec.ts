import { TestBed } from '@angular/core/testing';

import { NgxEvnetCalendarService } from './ngx-evnet-calendar.service';

describe('NgxEvnetCalendarService', () => {
  let service: NgxEvnetCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEvnetCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
