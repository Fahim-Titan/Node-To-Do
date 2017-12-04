import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';

import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {path: 'tasklist', component: TaskListComponent},
  {path: 'task/Create', component: CreateTaskComponent},
  {path: 'registration', component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
