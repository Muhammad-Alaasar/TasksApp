import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TasksService, private fb: FormBuilder, private router: Router) { }

  addTaskForm = this.fb.group({
    title: ["", [Validators.required, Validators.minLength(3)]],
    description: ["", [Validators.required, Validators.minLength(6)]],
    completed: [false],
    image: []
  })

  addTask(taskData: object) {
    this.taskService.addTask(taskData).subscribe({
      next: res => {
        this.router.navigateByUrl('tasks')
      },
      error: e => console.log(e)
    })
  }

  file: any
  handleUpload(e: any) {
    this.file = e.target.files[0]
  }

  addTaskImage(taskData: any) {
    const formData = new FormData
    // this.file && 
    formData.append('taskImage', this.file)
    formData.append('title', taskData.title)
    formData.append('description', taskData.description)
    formData.append('completed', taskData.completed)
    this.taskService.addTaskImage(formData).subscribe({
      next: () => {
        this.router.navigateByUrl('tasks')
      },
      error: () => console.log("Error in AddTaskImage")
      
    })

    // this.taskService.addTaskImage(taskData).subscribe({
    //   next: res => {
    //     this.router.navigateByUrl('tasks')
    //   },
    //   error: e => console.log(e)
    // })
  }

  uploadImage(){

  }

  ngOnInit(): void {
  }

}
