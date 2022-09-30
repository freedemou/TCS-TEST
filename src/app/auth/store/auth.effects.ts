import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  tap,
} from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import * as auth from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(auth.LOGIN),
      exhaustMap((action: auth.Login) =>
        this.authService.login(action.payload).pipe(
          map((user) => new auth.LoginSuccess({ user })),
          catchError((error) => of(new auth.LoginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(auth.LOGIN_SUCCESS),
        tap(() => this.router.navigateByUrl('/task'))
      ),
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(auth.LOGIN_REDIRECT),
        tap(() => this.router.navigateByUrl('/login'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
