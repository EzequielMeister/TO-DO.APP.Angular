import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos: Todo[] = [];
  private todos$ = new BehaviorSubject<Todo[]>(this.todos);

  getTodos() {
    return this.todos$.asObservable();
  }

 addTodo(title: string) {
  const newTodo: Todo = { id: Date.now(), title, completed: false };
  this.todos.push(newTodo);
  this.todos$.next([...this.todos]); // copia del array
}

toggleTodo(id: number) {
  const todo = this.todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    this.todos$.next([...this.todos]); // copia del array
  }
}

deleteTodo(id: number) {
  this.todos = this.todos.filter(t => t.id !== id);
  this.todos$.next([...this.todos]); // copia del array
}
}
