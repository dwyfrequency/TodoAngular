import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Read angular routing guide
const routes: Routes = [
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: 'todo', component: TodoListComponent },
  { path: '**', redirectTo: 'todo' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
