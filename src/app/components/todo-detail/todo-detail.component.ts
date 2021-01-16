import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchService } from 'src/app/service/fetch.service';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {

  todo?: Observable<Todo>

  constructor(private fetchService: FetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todo = this.fetchService.getTodo(id);
  }
}
