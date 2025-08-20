import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'todo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-form.html',
  styleUrls: ['./todo-form.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
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
