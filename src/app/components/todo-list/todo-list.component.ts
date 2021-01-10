import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo';
import { FetchService } from 'src/app/service/fetch.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private fetch: FetchService) {}

  ngOnInit(): void {
    this.fetch.getTodos().subscribe((results) => {
      this.todos = results;
    });
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
