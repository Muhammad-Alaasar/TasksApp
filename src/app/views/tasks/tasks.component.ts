import { Task } from '../../interfaces/task.interface';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TasksService) { }
  tasks: Task[] | any = []
  getMyTasks() {
    this.taskService.getMyTasks().subscribe({
      next: res => {
        this.tasks = res
        console.log(res);

      },
      error: e => console.log(e)
    })
  }
  deleteTask(id: any, index: any) {
    this.taskService.deleteTask(id).subscribe({
      next: res => this.tasks.splice(index, 1),
      error: e => console.log(e)
    })
  }

  ngOnInit(): void {
    this.getMyTasks()
  }

}
