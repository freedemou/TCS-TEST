import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Task } from '../models/task.model';
import { AppState } from '../../app.reducer';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.subscribe( ({ task }) => {
      this.tasks = task;
    });

  }

}