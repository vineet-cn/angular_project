import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceService {
  private baseurl:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) {
        
   }

   getAll():Observable<any>
   {
    return this.http.get(this.baseurl+'alo')
   }

   create(data:any):Observable<any>
   {
    return this.http.post(this.baseurl,data)
   }



    // PUT update
  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseurl}/${id}`, data);
  }

  // DELETE
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`);
  }

}
