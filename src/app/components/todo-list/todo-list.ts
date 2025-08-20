import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TodoService, Todo } from '../../services/todo.service';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css'],
  animations: [
    trigger('taskAnimation', [
      // Animación al aparecer
      transition(':enter', [
        animate('500ms ease-out', keyframes([
          style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ]),
      // Animación al desaparecer
      transition(':leave', [
        animate('400ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
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
