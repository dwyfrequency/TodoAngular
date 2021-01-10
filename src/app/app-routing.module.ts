import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Read angular routing guide
const routes: Routes = [
  { path: 'todo/:id', component: TodoListComponent },
  { path: 'todo', component: TodoListComponent },
  { path: '**', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
