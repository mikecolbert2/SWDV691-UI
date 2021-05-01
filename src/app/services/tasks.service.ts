import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
//import { map } from 'rxjs/operators';
import { TaskLog } from '../models/task-log';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://swdv691-services.herokuapp.com/api/';
  //baseUrl = 'http://localhost:5000/api/';

  newTask: Task = new Task();

  getTasksForUser(user_id: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + 'user/tasks/' + user_id, {
      responseType: 'json',
    });
  }

  insertTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl + 'user/task', newTask);
  }

  removeTask(deleteTaskId: string): Observable<Task> {
    console.log('inisde task servcice:  ' + deleteTaskId);
    return this.http.delete<Task>(this.baseUrl + 'user/task/' + deleteTaskId);
  }

  getAllTasksLog(id: string): Observable<TaskLog[]> {
    console.log('inside getAllTasksLog');
    console.log(id);

    return this.http.get<TaskLog[]>(this.baseUrl + 'user/tasks-log/' + id, {
      responseType: 'json',
    });
  }

  removeTaskLogEntry(deleteLogEntryId: string): Observable<TaskLog> {
    console.log(
      'inside task service - delete task log entry: ' + deleteLogEntryId
    );
    return this.http.delete<TaskLog>(
      this.baseUrl + 'user/task_log/' + deleteLogEntryId
    );
  }
}
