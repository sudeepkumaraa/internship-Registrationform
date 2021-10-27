import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  title= 'signup'
  

  constructor(private formBuilder: FormBuilder) {
  }
    submit= false;
    signupForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName :['', Validators.required],
        phone:['',Validators.required],
        role:['',Validators.required],
        password:['',Validators.required],
        confirmPassword: ['',Validators.required]

  
    })
  

  get f(){
    return this.signupForm.controls
  }

  onSubmit() {
    this.submit = true;
    console.log(this.f);
  }



}
