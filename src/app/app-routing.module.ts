import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { UserManagerComponent } from './components/admin/user-manager/user-manager.component';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin/user-manager', component: UserManagerComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
