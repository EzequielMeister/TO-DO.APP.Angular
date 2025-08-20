import { Routes } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';
import { TodoForm } from './components/todo-form/todo-form';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodoList },
  { path: 'add', component: TodoForm }
];

