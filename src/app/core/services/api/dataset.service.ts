import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { APIConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class DatasetService {
  constructor(private apiConfigService: APIConfigService) {}

  createDataset(datasetName: string) {
    return this.apiConfigService.post('/datasets/create', {
      name: datasetName,
    });
  }

  getDatasets(): Observable<any> {
    return this.apiConfigService.get('/datasets/all');
  }
}
