import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {};
  @Output() completeTodoEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  completeTodo(id?: number) {
    console.log({ completeTodo: id });
    if (id) {
      this.completeTodoEvent.emit(id);
    }
  }
}
