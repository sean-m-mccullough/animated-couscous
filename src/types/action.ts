import { ContributionSelect, ContributionEdit, ContributionEditDismiss, ContributionCancel, ContributionCancelDismiss, ContributionCancelConfirm } from './action/contributions';

export enum Actions {
  APP_EDIT = 'APP_EDIT',
  APP_CANCEL = 'APP_CANCEL',
  APP_CANCEL_DISMISS = 'APP_CANCEL_DISMISS',
  APP_CANCEL_CONFIRM = 'APP_CANCEL_CONFIRM',
  CONTRIBUTIONEDIT_DISMISS = 'CONTRIBUTIONEDIT_DISMISS',
  CONTRIBUTION_SELECT = 'CONTRIBUTION_SELECT',
}

export type Action = ContributionCancel
  | ContributionCancelConfirm
  | ContributionCancelDismiss
  | ContributionEdit
  | ContributionEditDismiss
  | ContributionSelect
  ;
