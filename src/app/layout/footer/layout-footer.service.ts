import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LayoutFooterService {
  footer$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  rxFooter(): Observable<boolean> {
    return this.footer$;
  }

  showFooter(): void {
    this.footer$.next(true);
  }

  hideFooter(): void {
    this.footer$.next(false);
  }
}
