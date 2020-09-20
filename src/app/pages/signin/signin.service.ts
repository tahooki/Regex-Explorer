import { Injectable } from '@angular/core';
import { User } from '../../core/service/auth/auth.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private firestore: AngularFirestore
  ) {
  }

  getUser(authResult): any {
    const firebaseUser: any = this.firestore.collection('user').doc(authResult.user.uid).get();

    const doc = this.firestore.collection('user').doc(firebaseUser.uid);

    const user: User = {
      uid:      firebaseUser.uid,
      email:    firebaseUser.email,
      photoUrl: firebaseUser.photoURL
    };

    user.doc = doc;

    return user;
  }

  addUser(authResult): void {
    this.firestore.collection('user').doc(authResult.user.uid).set({
      email: authResult.user.email,
      image: authResult.user.photoURL,
      name:  authResult.user.displayName
    }).then((data) => {
      console.log('여기에는 무슨 값이 나올까?', data);
    });
  }
}
