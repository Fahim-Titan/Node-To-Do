import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLogInComponent,
    UserRegistrationComponent,
    TaskListComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }