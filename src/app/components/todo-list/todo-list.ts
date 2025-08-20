import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TodoService, Todo } from '../../services/todo.service';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html'
})
export class TodoList implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.getTodos();
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo.id);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
}