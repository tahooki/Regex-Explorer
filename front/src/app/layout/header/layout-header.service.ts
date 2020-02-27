import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LayoutHeaderService {
  header$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  rxHeader(): Observable<boolean> {
    return this.header$;
  }

  showHeader(): void {
    this.header$.next(true);
  }

  hideHeader(): void {
    this.header$.next(false);
  }
}
