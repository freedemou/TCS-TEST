import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as actions from '../store/task.actions';

import { Task } from '../models/task.model';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @ViewChild('inputFisico') txtInputDOM!: ElementRef;

  chkCheck!: FormControl;
  txtInput!: FormControl;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.chkCheck = new FormControl( this.task.check );
    this.txtInput = new FormControl( this.task.text, Validators.required );

    this.chkCheck.valueChanges.subscribe( () => {
      this.store.dispatch( actions.toggle({ id: this.task.id }) );
    });
  }

  edit() {
    this.txtInput.setValue( this.task.text );

    setTimeout(() => {
      this.txtInputDOM.nativeElement.select();
    }, 1);

  }

  remove() {

    this.store.dispatch( actions.remove({ id: this.task.id }) );

  }

}