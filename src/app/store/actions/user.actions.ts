import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction(
  '[User] load User',
  props<{ id: string }>()
);
export const loadUserSuccess = createAction(
  '[User] load user successfully',
  props<{ user: User }>()
);
export const loadUserError = createAction(
  '[User] load user error',
  props<{ payload: any }>()
);
