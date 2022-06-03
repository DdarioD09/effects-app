import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import * as userActions from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      switchMap((action) =>
        this.userService.getUserById(action.id).pipe(
          map((user) => userActions.loadUserSuccess({ user: user })),
          catchError((err) => of(userActions.loadUserError({ payload: err })))
        )
      )
    )
  );
}
