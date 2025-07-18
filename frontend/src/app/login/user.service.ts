import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { api }  from '../../env';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  // BehaviorSubject to track the authenticated user state
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  // Stores the current user
  user: User | undefined;

  // Subscription to track user state updates
  userSubscription: Subscription;

  // Checks if a user is logged in
  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    // Subscribe to user state changes and synchronize with cookies  
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });


  }

  // Methods for login and logout
  login(email: string, password: string) {
    return this.http
      .post<User>(`${api}/users/login`, { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }


logout() {
    return this.http
    .post(`${api}/users/logout`, {}, {
      headers: {
        'X-Authorization': this.user?.accessToken || ''
      }
    })
    .pipe(
      tap(() => this.user$$.next(undefined))
    );
}


  // Unsubscribes from user updates to prevent memory leaks
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}