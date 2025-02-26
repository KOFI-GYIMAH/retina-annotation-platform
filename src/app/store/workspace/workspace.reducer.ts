import { createReducer, on } from '@ngrx/store';
import { WorkspaceMembers } from '@shared/models';

import * as WorkspaceActions from './workspace.actions';

export interface WorkspaceState {
  members: WorkspaceMembers[];
  loading: boolean;
  error: any;
}

export const initialState: WorkspaceState = {
  members: [],
  loading: false,
  error: null,
};

export const workspaceReducer = createReducer(
  initialState,

  // *  All Members
  on(WorkspaceActions.loadWorkspaceMembers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(WorkspaceActions.loadWorkspaceMembersSuccess, (state, { members }) => ({
    ...state,
    members: members.data,
    error: null,
    loading: false,
  })),
  on(WorkspaceActions.loadWorkspaceMembersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(WorkspaceActions.retainWorkspaceMembers, (state) => ({
    ...state,
    loading: false,
    error: null,
  }))
);
