import { Routes } from '@angular/router';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
export const routes: Routes = [
  // { path: '', component: AppComponent }, 
  {path:'', component: TodolistComponent},
  { path: 'new-task', component: AddNewTaskComponent } ,

];
