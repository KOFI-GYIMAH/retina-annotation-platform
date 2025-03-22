import { createAction, props } from '@ngrx/store';

// * All Classes
export const loadClasses = createAction(
  '[Classes] Load Classes',
  props<{ class_category: string }>()
);
export const loadClassesSuccess = createAction(
  '[Classes] Load Classes Success',
  props<{ classes: any }>()
);
export const loadClassesFailure = createAction(
  '[Classes] Load Classes Failure',
  props<{ error: any }>()
);
export const addToClassesList = createAction(
  '[Classes] Add to Classes List',
  props<{ classes: any }>()
);
export const retainClasses = createAction('[Classes] Retain Classes');
