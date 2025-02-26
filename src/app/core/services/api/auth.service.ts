import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { APIConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiConfigService: APIConfigService) {}

  login(payload: { email: string; password: string }): Observable<any> {
    return this.apiConfigService.un_post('/auth/login', payload);
  }

  sendInvite(payload: { email: string; role: string }): Observable<any> {
    return this.apiConfigService.post('/invitations/invite', payload);
  }
}
