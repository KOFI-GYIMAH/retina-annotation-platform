import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkspaceState } from './workspace.reducer';

export const selectWorkspaceMembersState =
  createFeatureSelector<WorkspaceState>('workspace');

// * All workspace members
export const selectWorkspaceMembersLoading = createSelector(
  selectWorkspaceMembersState,
  (state) => state.loading
);
export const selectWorkspaceMembers = createSelector(
  selectWorkspaceMembersState,
  (state) => state.members || []
);
