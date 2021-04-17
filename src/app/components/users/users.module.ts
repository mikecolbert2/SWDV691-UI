import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, FormsModule],
  exports: [RegisterComponent],
})
export class UsersModule {}
