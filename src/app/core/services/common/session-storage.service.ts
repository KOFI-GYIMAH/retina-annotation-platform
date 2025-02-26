import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  // * Set item in sessionStorage
  setItem(key: string, value: any) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  }

  // * Get item from sessionStorage
  getItem(key: string): any {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // * Remove item from sessionStorage
  removeItem(key: string) {
    return sessionStorage.removeItem(key);
  }

  // * Clear sessionStorage
  clear() {
    return sessionStorage.clear();
  }
}
