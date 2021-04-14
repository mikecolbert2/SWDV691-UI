import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RegisterUserComponent } from './components/users/register-user/register-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { UserManagerComponent } from './components/admin/user-manager/user-manager.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'user/register', component: RegisterUserComponent },
  { path: 'user/update/:user_id', component: UpdateUserComponent },
  { path: 'admin/user-manager', component: UserManagerComponent },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
