import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { APIConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiConfigService: APIConfigService) {}

  getWorkspaceMembers(): Observable<any> {
    return this.apiConfigService.get('/users/all');
  }

  sendInvite(payload: { email: string; role: string }): Observable<any> {
    return this.apiConfigService.post('/invitations/invite', payload);
  }
}
