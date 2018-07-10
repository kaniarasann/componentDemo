import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormGroupName, FormBuilder} from '@angular/forms';
import { Customvalidation } from '../CustomValidation';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  formBuilder;
  constructor(fb: FormBuilder) {
   this.formBuilder = fb.group({
     account: fb.group({
       username: ['',
       [Validators.required, Validators.minLength(3), Customvalidation.WhiteSpace],
      Customvalidation.validateAsync],
      password: ['', [Validators.required, Validators.minLength(5), Customvalidation.WhiteSpace]]
     })
   });
   }

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',
       [Validators.required, Validators.minLength(3), Customvalidation.WhiteSpace],
      Customvalidation.validateAsync),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Customvalidation.WhiteSpace])
    }),
  });

  get usernameCtrlState() {
    return this.formBuilder.get('account.username');
  }

  get passwordCtrlState() {
    return this.formBuilder.get('account.password');
  }

  login() {
    this.form.setErrors({invalidLogin: true});
  }
  ngOnInit() {
  }

}
