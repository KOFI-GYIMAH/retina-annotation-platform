import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClassesState } from './classes.reducer';

export const selectClassesState =
  createFeatureSelector<ClassesState>('classes');

// * All Classes
export const selectClassesLoading = createSelector(
  selectClassesState,
  (state) => state.loading
);
export const selectClasses = createSelector(
  selectClassesState,
  (state) => state.classes || []
);
