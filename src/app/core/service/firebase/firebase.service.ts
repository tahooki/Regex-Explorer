import { Injectable } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { CollectionReference } from '@angular/fire/firestore/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) {
  }

  async getSubCollection({collectionId, uid}): Promise<QueryDocumentSnapshot<any>> {
    const docList = await this.firestore.collectionGroup(collectionId,
      (ref: CollectionReference) => ref.where('id', '==', uid)).get().toPromise();
    this.firestore.collectionGroup(collectionId,
      (ref: CollectionReference) => ref.where('id', '==', uid)).get()
    return docList.docs?.[0];
  }

  async getCollectionListInDocument({doc, collectionPath}) {
    const docList = await doc.ref.collection(collectionPath).orderBy('createdAt').get();
    const result = docList.docs.map(item => {
      const data = item.data();
      data.doc   = item;
      return data;
    });

    return result;
  }

  subscribeCollectionListInDocument({doc, collectionPath}) {
    return doc.ref.collection(collectionPath).orderBy('createdAt');
  }
}
