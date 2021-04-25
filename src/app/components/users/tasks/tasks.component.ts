import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../../models/task';
import { TasksService } from '../../../services/tasks.service';
import { Timer } from '../../../models/timer';
import { TimersService } from '../../../services/timers.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(
    private tasksService: TasksService,
    private router: Router,
    private timersService: TimersService
  ) {}

  tasks: Task[] = [];
  user_id!: string | null;
  id!: string | null;
  newTask: Task = new Task();
  deleteTaskIndex = 0;
  deleteTaskId!: string | null;
  newTimer: Timer = new Timer();
  startTimerIndex = 0;
  startTimerTaskId!: string | null;

  ngOnInit(): void {
    this.user_id = sessionStorage.getItem('user_id');
    if (this.user_id) {
      const id = this.user_id.slice(1, -1);
      console.log('user_id:  ' + id);
      this.tasksService.getTasksForUser(id).subscribe((response: Task[]) => {
        this.tasks = response;
      });
    } else {
      // else logic goes here
    }
  }

  getId = () => {
    this.user_id = sessionStorage.getItem('user_id');
    if (this.user_id) {
      this.id = this.user_id.slice(1, -1);
      return this.id;
    } else {
      return;
      this.router.navigate(['login']);
    }
  };

  onSaveClick() {
    this.getId();
    if (this.id) {
      this.newTask.user_id = this.id;
      console.log(this.newTask);
      this.tasksService.insertTask(this.newTask).subscribe(
        (response) => {
          console.log('response:  ');
          console.log(response);
          console.log(response.task_id);
          //Add Task to Database
          var t: Task = new Task();
          t.task_name = response.task_name;
          t.user_id = response.user_id;
          t.task_id = response.task_id;
          t.date_created = response.date_created;
          console.log('t:  ');
          console.log(t);

          this.tasks.push(t);

          //Clear New Project Dialog - TextBoxes
          this.newTask.task_name = '';

          //this.router.navigate(['admin/user-manager']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  onDeleteClick = (index: number) => {
    console.log('inside delete task');
    console.log('task id:  ' + this.tasks[index].task_id);
    console.log('task name:  ' + this.tasks[index].task_name);
    this.deleteTaskIndex = index;
    this.deleteTaskId = this.tasks[index].task_id;
    this.tasksService.removeTask(this.deleteTaskId).subscribe(
      (response) => {
        this.tasks.splice(this.deleteTaskIndex, 1); //update the users array with this user detail from response
      },
      (error) => {
        console.log(error);
      }
    );
  };

  startTimerClick = (index: number) => {
    console.log('starting timer - ' + index);
    this.newTimer.task_id = this.tasks[index].task_id;
    this.newTimer.active = true;
    //this.newTimer.start_time = Date.now() / 1000.0; //convert to seconds for Postgres
    this.timersService.startTimer(this.newTimer).subscribe(
      (response) => {
        console.log('inside starting timer response');
        console.log(response);
        this.newTimer.log_id = response.log_id;
        this.newTimer.start_time = response.start_time;
        console.log('log_id:  ' + response.log_id);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  stopTimerClick = () => {
    console.log('stopping timer ');
    console.log(this.newTimer);
    //this.newTimer.end_time = Date.now() / 1000.0; //convert to seconds for Postgres
    this.newTimer.active = false;
    this.timersService.stopTimer(this.newTimer).subscribe(
      (response) => {
        console.log('inside stopping timer response');
        console.log(response);
        //data coming back from database - push into tasks_log?
        //reload page
        this.router.navigateByUrl('dashboard');
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
