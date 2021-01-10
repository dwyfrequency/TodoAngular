import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoModule } from '../todo/todo.module';
import { FetchService } from 'src/app/service/fetch.service';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, TodoModule, MatCardModule],
  exports: [TodoListComponent],
  // providers: [FetchService],
})
export class TodoListModule {}
