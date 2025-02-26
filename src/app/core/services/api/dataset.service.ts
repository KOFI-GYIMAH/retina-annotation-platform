import { Injectable } from '@angular/core';
import { APIConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class DatasetService {
  constructor(private apiConfigService: APIConfigService) {}

  createDataset(datasetName: string) {
    return this.apiConfigService.post('/datasets/', { name: datasetName });
  }

  getDatasets() {
    return this.apiConfigService.get('/datasets/');
  }
}
