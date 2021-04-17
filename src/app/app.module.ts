import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AdminModule } from './components/admin/admin.module';
//import { RegisterComponent } from './components/users/register/register.component';
import { UsersModule } from './components/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    WelcomeComponent,
    //RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
