import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from '../shared/todo';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(
      `https://jsonplaceholder.typicode.com/todos?_page=1`
    );
  }
}
