import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TaskContentComponent } from './task-content/task-content.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { ReactiveFormsModule } from '@angular/forms';

import * as authReducer from '../auth/store/auth.reducer'
import { AuthEffects } from '../auth/store/auth.effects';

import { OnlyAlphanumericDirective } from '../core/directives/only-alphanumeric.directive';

@NgModule({
  declarations: [
    TaskContentComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskAddComponent,
    OnlyAlphanumericDirective
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class TaskModule { }
