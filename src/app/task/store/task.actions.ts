import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[Task] Create',
    props<{ text: string }>()
);

export const remove = createAction(
    '[Task] Remove',
    props<{ id: number }>()
);

export const toggle = createAction(
    '[Task] Toggle',
    props<{ id: number }>()
);