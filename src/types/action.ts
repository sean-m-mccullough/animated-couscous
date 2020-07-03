import { ContributionSelect, ContributionEdit, ContributionEditDismiss } from './action/contributions';

export enum Actions {
  CONTRIBUTION_EDIT = 'CONTRIBUTION_EDIT',
  CONTRIBUTION_EDIT_DISMISS = 'CONTRIBUTION_EDIT_DISMISS',
  CONTRIBUTION_SELECT = 'CONTRIBUTION_SELECT',
}

export type Action = ContributionEdit
  | ContributionEditDismiss
  | ContributionSelect
  ;
