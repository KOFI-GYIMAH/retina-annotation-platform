import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  datasetsReducer,
  type DatasetsState,
} from './datasets/datasets.reducer';

// * Export state interface
export interface AppState {
  datasets: DatasetsState;
}

// * Export reducers
export const reducers: ActionReducerMap<AppState> = {
  datasets: datasetsReducer,
};

// * Export effects
export { DatasetsEffect } from './datasets/datasets.effects';

export const metaReducers: MetaReducer<AppState>[] = !isDevMode() ? [] : [];
