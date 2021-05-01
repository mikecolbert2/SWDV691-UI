import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskLog } from '../../../models/task-log';
import { TasksService } from '../../../services/tasks.service';
import * as moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.scss'],
})
export class TaskLogComponent implements OnInit {
  task_logs: TaskLog[] = [];
  user_id!: string | null | undefined;
  id!: string | null;
  deleteLogEntryIndex = 0;
  deleteLogEntryId!: string | null | undefined;
  //startDate: moment.Moment = moment();

  constructor(public tasksService: TasksService, private router: Router) {}

  ngOnInit(): void {
    console.log('inside task-log initialization');
    this.user_id = sessionStorage.getItem('user_id');
    if (this.user_id) {
      const id = this.user_id.slice(1, -1);
      console.log('user_id:  ' + id);
      this.tasksService.getAllTasksLog(id).subscribe((response: TaskLog[]) => {
        this.task_logs = response;
      });
    } else {
      // else logic goes here
    }
  }

  formatDate = (date_to_format: any) => {
    let tz: string = moment.tz.guess();
    console.log(tz);
    return moment.tz(date_to_format, tz).format('MMMM Do YYYY, h:mm:ss a z');

    //moment.tz("2014-06-01 12:00", "America/New_York");
  };

  onTaskLogDeleteClick = (index: number) => {
    console.log('inside delete task log entry');
    console.log('log id:  ' + this.task_logs[index].log_id);
    this.deleteLogEntryIndex = index;
    this.deleteLogEntryId = this.task_logs[index].log_id;
    this.tasksService.removeTaskLogEntry(this.deleteLogEntryId).subscribe(
      (response) => {
        this.task_logs.splice(this.deleteLogEntryIndex, 1); //update the users array with this user detail from response
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
