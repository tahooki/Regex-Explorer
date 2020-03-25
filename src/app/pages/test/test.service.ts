import { Injectable } from '@angular/core';
import { TestComponent } from './test.component';

@Injectable({
  providedIn: TestComponent
})
export class TestService {

  constructor() { }
}
