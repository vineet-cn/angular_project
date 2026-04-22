import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent implements OnInit {

  constructor(private http:HttpClient) { }

  Studentform:FormGroup=new FormGroup(
    {
      name:new FormControl(''),
      age:new FormControl(''),
      city:new FormControl('')

    }
  );
ngOnInit(): void {
    
}
  
   postData()
   {
    const data=this.Studentform.value;
    this.http.post("https://jsonplaceholder.typicode.com/posts",data).subscribe((res:any)=>
    {

    
   });

   




}


updateData() {
  const data = this.Studentform.value;

  this.http.put("https://jsonplaceholder.typicode.com/posts/1", data)
    .subscribe((res: any) => {
      console.log("Updated Data:", res);
      console.log("Post Response:", res); 
    });
}
}
