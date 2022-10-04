import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:3000/'

  addTask(taskData:object) {
    return this.http.post(this.url + "newtask", taskData)
  }

  getMyTasks(){
    return this.http.get(this.url+"tasks")
  }

  deleteTask(id:any){
    return this.http.delete(this.url+'task/'+id)
  }

  getTask(id: any){
    return this.http.get(this.url+'task/'+id)
  }

  updateTask(id:any , data:any){
    return this.http.patch(this.url+'task/'+id,data)
  }

  addTaskImage(data: any){
    return this.http.post(this.url+"newtask2", data)
  }
}
