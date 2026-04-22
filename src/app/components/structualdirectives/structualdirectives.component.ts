import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structualdirectives',
  templateUrl: './structualdirectives.component.html',
  styleUrls: ['./structualdirectives.component.css']
})
export class StructualdirectivesComponent implements OnInit {

  school:any[]=['rahul','ajay','manish']
  isActive:boolean=true
  num=2;

  constructor() { }

  ngOnInit() {
  }


}
