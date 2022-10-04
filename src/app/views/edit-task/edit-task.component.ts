import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskService: TasksService, private AR: ActivatedRoute, private route: Router) { }

  id: any = this.AR.snapshot.params['id']
  task: Task = {}

  getTask(id: any) {
    this.taskService.getTask(id).subscribe({
      next: res => this.task = res,
      error: e => console.log(e)
    })
  }
  editTaskFn(data:any){
    this.taskService.updateTask(this.id, data).subscribe({
      next: res => this.route.navigateByUrl('tasks'),
      error: e=> console.log(e)
    })
  }

  ngOnInit(): void {
    this.getTask(this.id)
  }

}
