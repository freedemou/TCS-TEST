import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AppState } from '../../app.reducer';
import * as auth from '../../auth/store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    public authService: AuthService,
    private store: Store<AppState>
  ) {}

  canLoad(): Observable<boolean> {
    return this.validateLoginSession();
  }

  private validateLoginSession(): Observable<boolean> {
    return this.store.select('auth')
      .pipe(
        take(1),
        map(({ loggedIn }) => {
          if (!loggedIn) {
            this.store.dispatch(new auth.LoginRedirect());
            return false;
          }
    
          return true;
        }
      )
    )
  } 

}
