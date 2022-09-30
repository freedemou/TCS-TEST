import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';
import { create, remove, toggle } from './task.actions';

export const inicialState: Task[] = [];

const _taskReducer = createReducer(inicialState,
  on( create, (state, { text }) => [...state, new Task( text )  ] ),
  on( remove, ( state, { id } ) =>  state.filter( task => task.id !== id ) ),
  on( toggle, (state, { id }) => {

    return state.map( task => {
      if ( task.id === id  ) {
        return {
          ...task,
          check: !task.check
        }
      } else {
        return task;
      }
    });
  }),
);

export function reducer(state: any, action: any) {
  return _taskReducer(state, action);
}