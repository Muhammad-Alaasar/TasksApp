import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get(this.url+"profile")
  }

  editProfile(body:any){
    return this.http.patch(this.url+'editProfile', body)
  }

  addImage(image: any){
    return this.http.post(this.url+"uploadimage", image)
  }
}
