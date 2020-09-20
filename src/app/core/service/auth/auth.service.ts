import { Injectable } from '@angular/core';
import { User } from './auth.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser: User;
  loginUser$ = new BehaviorSubject<User>(null);

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
  }

  rxLoginUser(): Observable<User> {
    return this.loginUser$;
  }

  getLoginUser(): User {
    return this.loginUser;
  }

  signin(loginUser: User): void {
    this.loginUser = loginUser;
  }

  signout(): void {
    this.afAuth.signOut().then(data => {
      this.loginUser = null;
      this.loginUser$.next(this.loginUser);
      this.router.navigateByUrl('signin');
    });
  }
}
