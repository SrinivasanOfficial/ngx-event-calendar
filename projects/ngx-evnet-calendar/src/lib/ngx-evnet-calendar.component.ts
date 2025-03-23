import { Component, computed, input, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'ngx-evnet-calendar',
  imports: [],
  templateUrl: './ngx-evnet-calendar.component.html',
  styleUrl: './ngx-evnet-calendar.component.scss'
})
export class NgxEvnetCalendarComponent implements OnInit {

  items: any = [];
  itemsArr: any = signal([]);

  config: any = input({});
  defaultConfig: any = {
    customDate: Date.now()
  }
  configData: any = computed(() => ({
    ...this.defaultConfig,
    ...this.config()
  }));

  daysArr: any = signal([]);
  monthArr: WritableSignal<Array<string>> = signal(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);

  /* selYear: any = computed(() => {
    console.log('selYear', this.configData(), ' -- ', new Date(parseInt(this.configData().customDate))?.getFullYear())
    return new Date(this.configData().customDate)?.getFullYear();
  }); */

  selYear: any = computed(() => new Date(parseInt(this.configData().customDate))?.getFullYear());
  selMonth: any = computed(() => new Date(parseInt(this.configData().customDate))?.getMonth());
  selDay: any = computed(() => new Date(parseInt(this.configData().customDate))?.getDay());
  selMonthName: any = computed(() => (this.monthArr()[this.selMonth()]));

  ngOnInit() {
    this.loadDiv();
    this.necInitialize();
    console.log('config', this.configData());
  }

  loadDiv() {
    for (let i = 1; i <= 35; i++) {
      this.itemsArr.update((val: any) => [...val, i]);
    }
  }

  necInitialize() {
    this.daysArr.set(Array.from({ length: 7 }, () => Array.from({ length: 5 }, () => "")));
    this.necLoadDaysOfMonth();
    console.log('days', this.daysArr());
    console.log(this.selYear(), ' -- ', this.selMonthName(), ' -- ', this.selMonth())
  }

  necLoadDaysOfMonth() {
    const numOfDays = new Date(this.selYear(), this.selMonth() + 1, 0).getDate();
    const firstDay = new Date(this.selYear(), this.selMonth(), 1).getDay();
    console.log('num days', numOfDays, ' -- ', this.selDay());
  }

}
