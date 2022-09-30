import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth/store/auth.reducer';
import { Task } from './task/models/task.model';
import * as taskReducer from './task/store/task.reducer';

export interface AppState {
    auth: fromAuth.AuthState,
    task: Task[]
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: fromAuth.reducer,
    task: taskReducer.reducer
};

