import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
