import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private fb: FormBuilder) { }
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  loginWithFirebase() {
    // alert("Chào FB");
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    this.auth.loginFirebase(email, password).then((res) => {
      location.href = 'dashboard';
    });
  }

}
