import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {


  name:any="vineet";
  age:number=12;
  isactive:boolean=true;

  constructor() { 
    this.name="raju"
  }


  bkkkk(value:string)
  {
    alert(value);

  }

  ngOnInit() {
  }

}
