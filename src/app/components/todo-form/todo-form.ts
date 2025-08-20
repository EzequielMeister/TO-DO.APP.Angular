import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-form.html'
})
export class TodoForm {
  newTodo: string = '';

  constructor(private todoService: TodoService, private router: Router) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
      this.router.navigate(['/todos']);
    }
  }
}