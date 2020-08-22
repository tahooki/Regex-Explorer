import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../core/service/auth/auth.service';

@Component({
  selector:    'app-login',
  templateUrl: './signin.component.html',
  styleUrls:   [ './signin.component.scss' ]
})
export class SigninComponent implements OnInit {

  user: any;

  loginUser;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => { // 아래꺼랑 동일.
      console.log('authState', user);
      this.user = user;

      if (user) {
        this.firestore.collection('user').doc(user.uid).get().subscribe(data => {
          console.log('get data ', data.data());
        });
      } else {
        this.makeLoginContainer();
      }
    });

    // this.afAuth.user.subscribe(user => {
    //   console.log('user', user);
    //
    //   if(user) {
    //     this.firestore.collection('user').doc(user.uid).get().subscribe(data => {
    //       console.log('get data ', data.data());
    //     })
    //   }
    // });

  }

  makeLoginContainer(): void {
    // https://github.com/firebase/firebaseui-web/issues/216 new firebaseui.auth.AuthUI(firebase.auth())
    // Error: An AuthUI instance already exists for the key "[DEFAULT]"
    const ui       = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = this.getUiConfig();
    ui.start('#firebaseui-auth-container', uiConfig);

    // Is there an email link sign-in?
    if (ui.isPendingRedirect()) {
      ui.start('#firebaseui-auth-container', uiConfig);
    }
// This can also be done via:
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }

  logout() {
    this.afAuth.signOut();
    this.makeLoginContainer();
  }

  private getUiConfig(): any {
    const uiConfig = {
      callbacks:        {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          // console.log('authResult', authResult);
          // console.log('authResult', authResult.user);
          // console.log('authResult', authResult.user.uid);
          // console.log('authResult', authResult.user.email);
          // console.log('redirectUrl', redirectUrl);
          const user = this.firestore.collection('user').doc(authResult.user.uid).get();
          console.log('user', user);
          // 이곳에서 user 도큐먼트에 값을 넣으면 될거같음 !
          if (!user) {
            this.firestore.collection('user').doc(authResult.user.uid).set({
              email: authResult.user.email,
              image: authResult.user.photoURL,
              name:  authResult.user.displayName
            }).then(() => {
            });
          }
          /*
          *
          uid: "oCsKnXkui8fC6Bl3DV5RCGf54U13"
displayName: "Tahooki Developer"
photoURL: "https://lh5.googleusercontent.com/-sxdtiLzYESs/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPIS6oGu9SVBiH93BTENCLM1MAh5g/photo.jpg"
email: "tahooki12@gmail.com"
emailVerified: true
phoneNumber: null
          * */
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return false;
        },
        uiShown() {
          console.log('ho!!!!');
          // The widget is rendered.
          // Hide the loader.
          // document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow:       'popup',
      signInSuccessUrl: 'http://localhost:4200/login',
      // signInOptions: [
      //   // Leave the lines as is for the providers you want to offer your users.
      //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
      // ],
      signInOptions:    [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          scopes:           [
            'public_profile',
            'email',
            'user_likes',
            'user_friends'
          ],
          customParameters: {
            auth_type: 'reauthenticate'
          },
          provider:         firebase.auth.FacebookAuthProvider.PROVIDER_ID
        },
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
          requireDisplayName: false,
          provider:           firebase.auth.EmailAuthProvider.PROVIDER_ID
        },
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl:           '<your-tos-url>',
      // Privacy policy url.
      privacyPolicyUrl: '<your-privacy-policy-url>',
      // tosUrl:           '<your-tos-link>',
      // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
      credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
      // Other config options...
    };

    return uiConfig;
  }
}
