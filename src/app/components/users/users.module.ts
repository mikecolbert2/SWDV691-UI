import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TimersComponent } from './timers/timers.component';
import { TaskLogComponent } from './task-log/task-log.component';
//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterComponent, DashboardComponent, TasksComponent, TrackerComponent, TimersComponent, TaskLogComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
  exports: [RegisterComponent],
})
export class UsersModule {}
