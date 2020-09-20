import { AngularFirestoreDocument } from '@angular/fire/firestore/document/document';

export interface User {
  uid: string;
  email: string;
  photoUrl: string;
  doc?: AngularFirestoreDocument;
}
