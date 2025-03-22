import { createReducer, on } from '@ngrx/store';

import * as ClassesActions from './classes.actions';

export interface ClassesState {
  classes: any[];
  loading: boolean;
  error: any;
}

export const initialState: ClassesState = {
  classes: [],
  loading: false,
  error: null,
};

export const classesReducer = createReducer(
  initialState,

  // *  All Classes
  on(ClassesActions.loadClasses, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ClassesActions.loadClassesSuccess, (state, { classes }) => ({
    ...state,
    classes: classes.data,
    error: null,
    loading: false,
  })),
  on(ClassesActions.loadClassesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(ClassesActions.retainClasses, (state) => ({
    ...state,
    loading: false,
    error: null,
  }))
);
