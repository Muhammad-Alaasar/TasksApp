import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: FormBuilder, private authService: AuthService, private route: Router) { }

  loginForm = this.login.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
invalidLogin :boolean = false
  loginFn(data: any) {
    // console.log(data)
    this.authService.login(data).subscribe({
      next: (res :any) => {
        localStorage.setItem('token', res.token)
        this.route.navigateByUrl('profile')
        // console.log(res);
        
      },
      error: e => {
        console.log(e)
        this.invalidLogin = true
      }
    })
  }

  ngOnInit(): void {
  }

}
