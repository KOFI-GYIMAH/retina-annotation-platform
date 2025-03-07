import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  datasetsReducer,
  type DatasetsState,
} from './datasets/datasets.reducer';
import {
  workspaceReducer,
  type WorkspaceState,
} from './workspace/workspace.reducer';

// * Export state interface
export interface AppState {
  datasets: DatasetsState;
  workspace: WorkspaceState;
}

// * Export reducers
export const reducers: ActionReducerMap<AppState> = {
  datasets: datasetsReducer,
  workspace: workspaceReducer,
};

// * Export effects
export { DatasetsEffect } from './datasets/datasets.effects';
export { WorkspaceEffect } from './workspace/workspace.effects';

export const metaReducers: MetaReducer<AppState>[] = !isDevMode() ? [] : [];
