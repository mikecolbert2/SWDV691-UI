import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../models/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiUrl:string = 'https://swdv691-services.herokuapp.com/api';
  

  constructor(private http:HttpClient) { }

  // Get Tasks
  getTasks():Observable<Task[]> {
   let url = this.apiUrl + "/items"
   console.log(url)
   return this.http.get<Task[]>(`${this.apiUrl}` + "/items");
  }

}
