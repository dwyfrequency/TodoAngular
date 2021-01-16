import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoDetailModule } from './components/todo-detail/todo-detail.module';
import { TodoListModule } from './components/todo-list/todo-list.module';
import { TodoModule } from './components/todo/todo.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    TodoDetailModule,
    TodoListModule,
    TodoModule,
    MatSliderModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
