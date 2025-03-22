import { createReducer, on } from '@ngrx/store';
import { Datasets } from '@shared/models';

import * as DatasetsActions from './datasets.actions';

export interface DatasetsState {
  datasets: Datasets[];
  loading: boolean;
  error: any;
}

export const initialState: DatasetsState = {
  datasets: [],
  loading: false,
  error: null,
};

export const datasetsReducer = createReducer(
  initialState,

  // *  All Datasets
  on(DatasetsActions.loadDatasets, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DatasetsActions.loadDatasetsSuccess, (state, { datasets }) => ({
    ...state,
    datasets: datasets.data,
    error: null,
    loading: false,
  })),
  on(DatasetsActions.loadDatasetsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(DatasetsActions.retainDatasets, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(DatasetsActions.addToDatasetsList, (state, { dataset }) => ({
    ...state,
    datasets: [dataset, ...state.datasets],
  }))
);
