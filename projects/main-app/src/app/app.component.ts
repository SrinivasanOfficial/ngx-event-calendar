import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEvnetCalendarComponent } from '../../../ngx-evnet-calendar/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxEvnetCalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main-app';

  config = {
    customDate: '1742407389000'
  }
}
