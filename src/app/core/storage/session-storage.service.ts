import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private storage: Storage;

  private storageType: string = 'sessionStorage';

  private prefix: string = `regex_`;

  private isSupport: boolean = false;

  constructor() {
    this._initSessionStorage();
  }

  get(key: string, prefix?: string): any {
    if (this.isSupport) {
      const deriveKey = this._deriveKey(key, prefix);
      let getSessionItem;
      if (this.storage.getItem(deriveKey) !== 'undefined' && this.storage.getItem(deriveKey) !== '') {
        getSessionItem = JSON.parse(this.storage.getItem(deriveKey));
      }
      return getSessionItem;
    }
  }

  set(key: string, value: any, prefix?: string): void {
    if (this.isSupport) {
      const deriveKey = this._deriveKey(key, prefix);
      this.storage.setItem(deriveKey, JSON.stringify(value));
    }
  }

  getAll(prefix?: string): any {
    const result = {};
    for (const key in this.storage) {
      if (key.indexOf(prefix || this.prefix) === 0) {
        const deriveKey = this._deriveKey(key, prefix);
        let getSessionItem;
        if (this.storage.getItem(deriveKey) !== 'undefined' && this.storage.getItem(deriveKey) !== '') {
          getSessionItem = JSON.parse(this.storage.getItem(deriveKey));
        }

        result[key] = getSessionItem;
      }
    }
    return result;
  }

  setSession(session: any, prefix?: string): void {
    for (const key of Object.keys(session)) {
      this.set(key, session[key], prefix);
    }
  }

  remove(key: string, prefix?: string): void {
    if (this.isSupport) {
      const deriveKey = this._deriveKey(key, prefix);
      this.storage.removeItem(deriveKey);
    }
  }

  clear(key: string, prefix?: string): void {
    if (this.isSupport) {
      for (const sessionKey in this.storage) {
        const derivedKey = this._deriveKey(key, prefix);
        if (sessionKey === derivedKey) {
          this.storage.removeItem(sessionKey);
          break;
        }
      }
    }
  }

  clearAll(prefix?: string): void {
    if (this.isSupport) {
      for (const key in this.storage) {
        if (key.indexOf(prefix || this.prefix) === 0) {
          this.storage.removeItem(key);
        }
      }
    }
  }

  setPrefix(prefix: string): void {
    this.prefix = prefix;
  }

  private _deriveKey(key: string, prefix?: string): string {
    if (prefix === undefined || prefix === null) {
      return `${this.prefix}${key}`;
    } else {
      return `${prefix}${key}`;
    }
  }

  private _initSessionStorage(): void {
    if (window && window[this.storageType as any] !== undefined) {
      this.storage = window[this.storageType as any] as any;
      this.isSupport = true;
    } else {
      this.isSupport = false;
    }
  }
}
