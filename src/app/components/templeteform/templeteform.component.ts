import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templeteform',
  templateUrl: './templeteform.component.html',
  styleUrls: ['./templeteform.component.css']
})
export class TempleteformComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  // 👉 Form data object
  penaltySearchParam = {
    fromDate: null,
    toDate: null
  };

  // 👉 Datepicker config
  dpConfig = {
    dateInputFormat: 'DD-MM-YYYY',
    containerClass: 'theme-green',
    showWeekNumbers: false
  };

  maxDate = new Date();
}