import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DatasetService } from '@services/api/dataset.service';

@Injectable()
export class DatasetsEffect {
  constructor(
    private actions$: Actions,
    private datasetService: DatasetService,
    private store: Store
  ) {}
}
