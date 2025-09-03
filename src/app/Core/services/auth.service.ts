import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'currentUser';

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.userKey);
  }

  getUser(): any {
    const data = localStorage.getItem(this.userKey);
    return data ? JSON.parse(data) : null;
  }

  logout(): void {
    localStorage.removeItem(this.userKey);
  }
}
