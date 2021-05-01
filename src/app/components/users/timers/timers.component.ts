import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { Timer } from 'src/app/models/timer';
import { TasksService } from 'src/app/services/tasks.service';
import { TimersService } from 'src/app/services/timers.service';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss'],
})
export class TimersComponent implements OnInit {
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
  button_value: number = 0;
  stop_id!: string | null;

  ngOnInit(): void {
    this.user_id = sessionStorage.getItem('user_id');
    if (this.user_id) {
      const id = this.user_id.slice(1, -1);
      console.log('user_id:  ' + id);
      this.tasksService.getTasksForUser(id).subscribe((response: Task[]) => {
        console.log(this.tasks);
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

  startTimerClick = (index: number) => {
    console.log('starting timer - ' + index);
    this.newTimer.task_id = this.tasks[index].task_id;
    this.button_value = 1;
    this.stop_id = this.tasks[index].task_id;
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
    this.button_value = 0;
    this.stop_id = '';
    this.newTimer.active = false;
    this.timersService.stopTimer(this.newTimer).subscribe(
      (response) => {
        console.log('inside stopping timer response');
        console.log(response);
        //data coming back from database - push into tasks_log?
        //reload page
        //this.router.navigateByUrl('dashboard');
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
