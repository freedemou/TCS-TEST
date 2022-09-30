import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.css']
})
export class TaskContentComponent implements OnInit {

  username$!: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getNameUser();
  }
  
  getNameUser(): void {
    this.username$ = this.store
      .select('auth')
      .pipe(
        map(({ user }) => (user?.name || ''))
      )
  }

}
