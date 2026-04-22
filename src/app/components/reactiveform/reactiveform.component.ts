import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  StudentForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    age: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(null, Validators.required),

    
  fromDate: new FormControl(null, Validators.required)
  });

  constructor() { }

  ngOnInit() {}

  // ✅ FIXED setValue
  setData() {
    this.StudentForm.setValue({
      name: 'Ram',
      age: 22,
      city: 'Delhi',
      dob: '2000-01-01',
      fromDate: '2024-04-01'
    });
  }

  // ✅ patchValue correct
  patchData() {
    this.StudentForm.patchValue({
      name: 'Shyam'
    });
  }

  formValue: any;

  onSave() {
    this.formValue = this.StudentForm.value;
    console.log(this.formValue);
  }


  bsConfig = {
  dateInputFormat: 'DD/MM/YYYY',
  containerClass: 'theme-green',
  showWeekNumbers: false
};
}