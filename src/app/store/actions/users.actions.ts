import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUsers = createAction('[Users] load Users');
export const loadUsersSuccess = createAction(
  '[Users] load users successfully',
  props<{ users: User[] }>()
);
export const loadUsersError = createAction(
  '[Users] load users error',
  props<{ payload: any }>()
);
