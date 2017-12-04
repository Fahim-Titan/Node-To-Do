import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {path: 'tasklist', component: TaskListComponent},
  {path: 'task/Create', component: CreateTaskComponent},
  {path: 'login', component: UserLogInComponent},
  {path: 'logout', component: UserLogInComponent},
  {path: 'registration', component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
