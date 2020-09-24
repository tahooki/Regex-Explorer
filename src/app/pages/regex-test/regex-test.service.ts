import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexTestService {

  constructor() {
  }

  getRegexTest(): any {
    return null;
  }

  addTestCase(collection, testCase): void {
    collection.add(testCase);

  }

  updateTestCase(): void {
  }

  deleteTestCase(): void {

  }

  addRegexCase(collection, regexCase): void {
    collection.add(regexCase);
  }

  updateRegexCase(): void {

  }

  deleteRegexCase(): void {

  }

}
