import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timer } from '../models/timer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TimersService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://swdv691-services.herokuapp.com/api/';
  //baseUrl = 'http://localhost:5000/api/';

  //newTimer: Timer = new Timer();

  startTimer(newTimer: Timer): Observable<Timer> {
    console.log('inside timers service - start timers function');
    console.log(newTimer);
    return this.http.post<Timer>(this.baseUrl + 'user/timer', newTimer);
  }

  stopTimer(newTimer: Timer): Observable<Timer> {
    console.log(newTimer);
    console.log('inside timers service - stop timers function');
    console.log(newTimer.log_id);
    console.log('running put');
    return this.http.put<Timer>(
      this.baseUrl + 'user/timer/' + newTimer.log_id,
      newTimer
    );
  }
}
