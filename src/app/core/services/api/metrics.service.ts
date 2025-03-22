import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class MetricsService {
  constructor(private apiConfigService: APIConfigService) {}

  createDataset(datasetName: string) {
    return this.apiConfigService.post('/datasets/create', {
      name: datasetName,
    });
  }

  getGlobalMetrics(): Observable<any> {
    return this.apiConfigService.get('/dashboard/global');
  }
}
