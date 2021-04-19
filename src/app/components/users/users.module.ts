import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
  exports: [RegisterComponent],
})
export class UsersModule {}
