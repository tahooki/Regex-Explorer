import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegexTest } from './regex-test.model';
import { FirebaseService } from '../../../core/service/firebase/firebase.service';

/*
* RegexTest 페이지 Resolver
* */
@Injectable({ providedIn: 'root' })
export class RegexTestResolver implements Resolve<[]> {
  constructor(
    private firebase: FirebaseService,
    private router: Router
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<RegexTest> | Promise<RegexTest> | any {
    const uid = route.params.uid;
    return new Promise<RegexTest>(async resolve => {

      const regexTestDoc = await this.firebase.getSubCollection({collectionId: 'regexTest', uid});

      const regexCaseList = await this.firebase.getCollectionListInDocument({doc: regexTestDoc, collectionPath: 'regexCase'});

      const testCaseList = await this.firebase.getCollectionListInDocument({doc: regexTestDoc, collectionPath: 'testCase'});

      if (!regexTestDoc) {
        alert('error!');
        this.router.navigateByUrl('main');
        resolve(null);
        return;
      }

      const regexTest: RegexTest = {
        uid: regexTestDoc.id,
        title: regexTestDoc.get('test'),
        doc: regexTestDoc,
        regexCaseList,
        testCaseList
      };

      resolve(regexTest);
    });
  }
}
