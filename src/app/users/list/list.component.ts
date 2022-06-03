import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../models/user.model';
import { loadUsers } from '../../store/actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users!: User[];
  loading: boolean = false;
  error: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.loading = loading;
      this.users = users;
      this.error = error;
    });
  }
}
