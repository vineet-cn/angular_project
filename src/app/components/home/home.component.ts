import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 name:string ="vineet";
  age=12;
  onClick()
  {
    debugger;
console.log(this.name);
console.log(this.age);


 
  }
  


}
