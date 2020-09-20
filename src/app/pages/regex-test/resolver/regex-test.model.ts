import { QueryDocumentSnapshot } from '@angular/fire/firestore';

export interface RegexTest {
  uid: string;
  doc: QueryDocumentSnapshot<any>;
  title: string;
  regexCaseList?: any[];
  testCaseList?: any[];
}
