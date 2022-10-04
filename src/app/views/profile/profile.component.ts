import { User } from '../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }
user:User = {}
  getProfile() {
    this.userService.getProfile().subscribe({
      next: res => this.user = res,
      error: e => console.log(e)
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
