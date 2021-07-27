import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // form: any = {
  //   username: null,
  //   email: null,
  //   password: null
  // };
  user: User = new User();

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // const { username, email, password } = this.form;
    console.log("my user")
    console.log(this.user);
    console.log("end testlog")

    const user: User = this.user;

    this.authService.register(user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.e
