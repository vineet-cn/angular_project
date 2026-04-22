import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.css']
})
export class ApiserviceComponent implements OnInit {

  responsedata: any;
  Studentform: FormGroup;
  editId: number | null = null;

  constructor(private serve: ServiceService) { }

  ngOnInit() {
    // Initialize form
    this.Studentform = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      city: new FormControl('')
    });

    // Load all data on component init
    this.getAllData();
  }

  // ================= GET ALL =================
  getAllData() {
    this.serve.getAll().subscribe(
      (res) => {
        this.responsedata = res;
        console.log("GET all data:", res);
      },
      (err) => console.error("GET error:", err),
      () => console.log("GET completed")
    );
  }

  // ================= POST =================
  postData() {
    const data = this.Studentform.value;
    this.serve.create(data).subscribe(
      (res) => {
        console.log("POST success:", res);
        this.getAllData(); // refresh list
        this.Studentform.reset(); // clear form
      },
      (err) => console.error("POST error:", err),
      () => console.log("POST completed")
    );
  }

  // ================= PUT =================
  updateData() {
    if (this.editId != null) {
      this.serve.update(this.editId, this.Studentform.value).subscribe(
        (res) => {
          console.log("PUT success:", res);
          this.getAllData();
          this.Studentform.reset();
          this.editId = null; // reset editId
        },
        (err) => console.error("PUT error:", err),
        () => console.log("PUT completed")
      );
    }
  }

  // ================= DELETE =================
  deleteData(id: number) {
    this.serve.delete(id).subscribe(
      (res) => {
        console.log("DELETE success:", res);
        this.getAllData(); // refresh list
      },
      (err) => console.error("DELETE error:", err),
      () => console.log("DELETE completed")
    );
  }

  // ================= EDIT =================
  editData(item: any) {
    this.Studentform.patchValue({
      name: item.name,
      age: item.age,
      city: item.city
    });
    this.editId = item.id; // store id to update
  }
}