import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-authe-autho',
  templateUrl: './authe-autho.component.html',
  styleUrls: ['./authe-autho.component.css']
})
export class AutheAuthoComponent implements OnInit {
  public form: FormGroup;
  public token: string;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    this.loginService.submitData(this.form.value).subscribe((x: Response) => {
      this.token = (x.json() as any).token;
      localStorage.setItem('token', this.token);
      this.route.navigate(['/home']);
    });
  }
}
