import { AngularFirestoreDocument } from '@angular/fire/firestore/document/document';

export interface User {
  uid: string;
  email: string;
  name: string;
  image: string;
  doc?: AngularFirestoreDocument;
}
