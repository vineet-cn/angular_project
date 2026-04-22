
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})
export class GetapiComponent implements OnInit {
      userlist:any;
  constructor(private http:HttpClient) { }

  getAllUser()
  {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments").subscribe((result:any)=>
    {
      this.userlist=result;
    })
  }

  ngOnInit() {
  }

}
