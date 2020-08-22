import { Injectable } from '@angular/core';
import { LoginUser } from './auth.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUser: LoginUser;

  loginUser$ = new BehaviorSubject<LoginUser>(null);

  constructor(private router: Router) {
  }

  rxLoginUser(): Observable<LoginUser> {
    return this.loginUser$;
  }

  getLoginUser(): LoginUser {
    return this.loginUser;
  }

  login(loginUser: LoginUser): void {
    this.loginUser = loginUser;
  }

  logout(): void {
    this.loginUser = null;
    this.loginUser$.next(this.loginUser);
    this.router.navigateByUrl('signin');
  }
}
