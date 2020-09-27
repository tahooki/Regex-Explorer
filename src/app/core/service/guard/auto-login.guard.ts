import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { SessionStorageService } from '../../storage/session-storage.service';
import { LocalStorageService } from '../../storage/local-storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../auth/auth.model';

@Injectable({ providedIn: 'root' })
export class AutoLoginGuard implements CanActivate {
  constructor(
    // private apiService: ApiService,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private fireStore: AngularFirestore,
    private sessionStorage: SessionStorageService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // 자동 로그인 불러오는 로직을 넣어야 함.
    // if (environment.isTesting === true) {
    //   this.authService.login(mockLoginUser);
    //   return true;
    // }

    // 이미 있는지.
    if (this.authService.getLoginUser()) {
      return true;
    }

    // fireAuth 에 로그인이 되어 있는지.

    if (await this.isFirebaseAuthLogin()) {
      return true;
    }

    // const uid = this.localStorage.get('uid');
    // firebase auth custom login 개발하기
    // if (!uid) {
    //   return true;
    // }

    return true;
  }


  private async isFirebaseAuthLogin(): Promise<boolean> {
    return new Promise((resolve) => {
      this.afAuth.authState.subscribe(async (auth) => {

        if (auth) {
          const doc             = this.fireStore.collection('user').doc(auth.uid);
          const instance        = await doc.get().toPromise();
          const user            = instance.data();
          console.log('doc', doc);
          console.log('user', user);
          const loginUser: User = {
            uid:      doc.ref.id,
            name:     user.name,
            email:    user.email,
            image: user.image
          };

          loginUser.doc = doc;

          this.authService.signin(loginUser);
          resolve(true);
        } else {
          resolve(false);
        }

      });
    });
  }
}
