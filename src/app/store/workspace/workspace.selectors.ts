import { WorkspaceState } from './workspace.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectWorkspaceMembersState =
  createFeatureSelector<WorkspaceState>('datasets');

// * All workspace members
export const selectWorkspaceMembersLoading = createSelector(
  selectWorkspaceMembersState,
  (state) => state.loading
);
export const selectWorkspaceMembers = createSelector(
  selectWorkspaceMembersState,
  (state) => state.members || []
);
