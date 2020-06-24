import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form:FormGroup;
  public day =[];
  public month = [];
  public year = [];
  public isValidFormSubmitted:Boolean;
  constructor(private fb:FormBuilder) { 
    let i;
    for(i=1;i<=31;i++){
      this.day.push(i);
    }
    for(i=1;i<=12;i++){
      this.month.push(i);
    }
    for(i=1980;i<=2020;i++){
      this.year.push(i);
    }
    // this.resetForm(this.form);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
      day: new FormControl(null,[Validators.required]),
      month: new FormControl(null,[Validators.required]),
      year: new FormControl(null,[Validators.required]),
      address:new FormControl('',[Validators.required,Validators.minLength(10)]),
      reading: new FormControl(false),
      cooking: new FormControl(false),
      sleeping: new FormControl(false),
      gender: new FormControl(false),
      file: new FormControl(''),
    })
  }

  onFormSubmit() {
		// this.isValidFormSubmitted = false;
		// if (this.form.valid) {
		// 	this.isValidFormSubmitted = true;
		// } else {
		// 	return;
		// }	
    // this.resetForm(this.form);
    
  
      console.log(this.form.valid);
    
  }
  resetForm(form: FormGroup) {
		form.reset();
	}

}