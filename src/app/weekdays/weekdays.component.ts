import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.scss']
})
export class WeekdaysComponent implements OnInit {
  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  date = new Date();
  currentDay =  this.weekdays[this.date.getDay()];
  constructor() {
  }

  ngOnInit(): void {
  }
}
