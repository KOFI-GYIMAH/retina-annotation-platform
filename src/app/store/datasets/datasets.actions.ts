import { createAction, props } from '@ngrx/store';

// * All Datasets
export const loadDatasets = createAction('[Datasets] Load Datasets');
export const loadDatasetsSuccess = createAction(
  '[Datasets] Load Datasets Success',
  props<{ datasets: any }>()
);
export const loadDatasetsFailure = createAction(
  '[Datasets] Load Datasets Failure',
  props<{ error: any }>()
);
export const retainDatasets = createAction('[Datasets] Retain Datasets');
