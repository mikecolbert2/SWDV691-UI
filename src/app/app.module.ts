import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TasksComponent } from './components/tasks/tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { RegisterUserComponent } from './components/users/register-user/register-user.component';
import { UserManagerComponent } from './components/admin/user-manager/user-manager.component';
import { ListAllUsersComponent } from './components/admin/list-all-users/list-all-users.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskListComponent,
    WelcomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    RegisterUserComponent,
    UserManagerComponent,
    ListAllUsersComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
