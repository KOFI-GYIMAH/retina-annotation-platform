import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DatasetService } from '@services/api/dataset.service';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { selectDatasets } from './datasets.selectors';

import * as datasetsActions from './datasets.actions';

@Injectable()
export class DatasetsEffect {
  constructor(
    private actions$: Actions,
    private datasetService: DatasetService,
    private store: Store
  ) {}

  loadDatasets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datasetsActions.loadDatasets),
      withLatestFrom(this.store.select(selectDatasets)),
      switchMap(([action, members]) => {
        if (members && members.length > 0) {
          return of(datasetsActions.retainDatasets());
        } else {
          return this.datasetService.getDatasets().pipe(
            map((datasets: any) =>
              datasetsActions.loadDatasetsSuccess({ datasets })
            ),
            catchError((error) =>
              of(datasetsActions.loadDatasetsFailure({ error }))
            )
          );
        }
      })
    )
  );
}
