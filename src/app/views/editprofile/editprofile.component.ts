import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }
  user: User = {};
  file: any;
  getProfile() {
    this.userService.getProfile().subscribe({
      next: (res) => (this.user = res),
      error: (e) => console.log(e),
    });
  }

  editNameFn(data: any) {
    delete data.image;
    this.userService.editProfile(data).subscribe({
      next: async (res) => {
        await this.uploadImage();
        this.router.navigateByUrl('profile');
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  handleUpload(e: any): void {
    this.file = e.target.files;
  }

  uploadImage() {
    if (this.file) {
      let myData = new FormData();
      myData.append('images', this.file[0]);
      this.userService.addImage(myData).subscribe({
        next: () => console.log("Nice"),
        error: (e) => console.log("Error")
      });
    }
  }

  ngOnInit(): void {
    this.getProfile();
  }
}
