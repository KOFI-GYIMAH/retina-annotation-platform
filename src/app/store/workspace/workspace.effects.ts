import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UserService } from '@services/api/user.service';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { selectWorkspaceMembers } from './workspace.selectors';

import * as workspaceActions from './workspace.actions';

@Injectable()
export class DatasetsEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store
  ) {}

  loadWorkforceMembers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.loadWorkspaceMembers),
      withLatestFrom(this.store.select(selectWorkspaceMembers)),
      switchMap(([action, members]) => {
        if (members && members.length > 0) {
          return of(workspaceActions.retainWorkspaceMembers());
        } else {
          return this.userService.getWorkspaceMembers().pipe(
            map((members: any) =>
              workspaceActions.loadWorkspaceMembersSuccess({ members })
            ),
            catchError((error) =>
              of(workspaceActions.loadWorkspaceMembersFailure({ error }))
            )
          );
        }
      })
    )
  );
}
