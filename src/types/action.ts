import { ContributionSelect, ContributionEdit, ContributionEditDismiss } from './action/contributions';

export enum Actions {
  APP_EDIT = 'APP_EDIT',
  CONTRIBUTIONEDIT_DISMISS = 'CONTRIBUTIONEDIT_DISMISS',
  CONTRIBUTION_SELECT = 'CONTRIBUTION_SELECT',
}

export type Action = ContributionEdit
  | ContributionEditDismiss
  | ContributionSelect
  ;
