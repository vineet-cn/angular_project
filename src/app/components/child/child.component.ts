import { Component, Input, OnInit,Output,EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
  }
  @Input() name:string;
  @Output() sendMessage=new EventEmitter<string>();



  ShowMessage()
  {
    alert("hello from child")
  }



}
