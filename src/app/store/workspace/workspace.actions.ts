import { createAction, props } from '@ngrx/store';

// * All Workspace members
export const loadWorkspaceMembers = createAction('[Workspace] Load Workspace');
export const loadWorkspaceMembersSuccess = createAction(
  '[Workspace] Load Workspace Success',
  props<{ members: any }>()
);
export const loadWorkspaceMembersFailure = createAction(
  '[Workspace] Load Workspace Failure',
  props<{ error: any }>()
);
export const retainWorkspaceMembers = createAction(
  '[Workspace] Retain Workspace'
);
