import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.scss']
})
export class WeekdaysComponent implements OnInit {
  weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //Weekdays array
  date = new Date();
  currentDay =  this.weekdays[this.date.getDay()]; //This is to get the current day
  constructor() {
  }

  ngOnInit(): void {
  }
}
