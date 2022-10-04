import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
invalidAge :string = ""
invalidEmail: boolean = false
invalidPassword: string = ""
user: User = {}
  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(value: any) {
    this.authService.signup(value).subscribe({
      next: (res: any) => {
        this.user = res
        console.log("Successfully Sign Up", res)
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('profile')
      },
      error: (e:any) => {
        console.log(e)
        if(e.error.errors?.age) this.invalidAge = e.error.errors.age.message
        else this.invalidAge = ""

        if (e.error.code) this.invalidEmail = true
        else this.invalidEmail = false
        
        if (e.error.errors?.password) this.invalidPassword = e.error.errors.password.message
        else this.invalidPassword = ""
      }
    })
  }
  changeEmail(){
    this.invalidEmail = false
  }
  ngOnInit(): void {
  }

}
