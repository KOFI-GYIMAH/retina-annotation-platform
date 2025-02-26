import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DatasetsState } from '../datasets/datasets.reducer';

export const selectDatasetsState =
  createFeatureSelector<DatasetsState>('datasets');

// * All Datasets
export const selectDatasetsLoading = createSelector(
  selectDatasetsState,
  (state) => state.loading
);
export const selectDatasets = createSelector(
  selectDatasetsState,
  (state) => state.datasets || []
);
