import { Action, ActionReducer } from '@ngrx/store';
import * as auth from './auth.actions';
import { User } from "../models/user.model";

export interface AuthState {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
};

export function authReducer(state = initialState, action: auth.Actions): AuthState {
  switch (action.type) {
    case auth.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    }

    case auth.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const reducer: ActionReducer<AuthState, Action> = (state, action) => authReducer(state, action as auth.Actions);

export const getLoggedIn = (state: AuthState) => state.loggedIn;
export const getUser = (state: AuthState) => state.user;