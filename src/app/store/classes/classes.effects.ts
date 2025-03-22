import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DatasetService } from '@services/api/dataset.service';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { selectClasses } from './classes.selectors';

import * as classesActions from './classes.actions';

@Injectable()
export class ClassesEffect {
  constructor(
    private actions$: Actions,
    private datasetService: DatasetService,
    private store: Store
  ) {}

  loadClasses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(classesActions.loadClasses),
      withLatestFrom(this.store.select(selectClasses)),
      switchMap(([action, classes]) => {
        if (classes && classes.length > 0) {
          return of(classesActions.retainClasses());
        } else {
          return this.datasetService.getClasses(action.class_category).pipe(
            map((classes: any) => {
              return classesActions.loadClassesSuccess({ classes });
            }),
            catchError((error) =>
              of(classesActions.loadClassesFailure({ error }))
            )
          );
        }
      })
    )
  );
}
