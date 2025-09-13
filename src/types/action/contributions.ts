import { Actions } from '../action';
import { WithContribution } from '../contribution';

export interface ContributionSelect extends WithContribution {
  type: Actions.CONTRIBUTION_SELECT;
}

export interface ContributionEdit {
  type: Actions.APP_EDIT;
}

export interface ContributionCancel {
  type: Actions.APP_CANCEL;
}

export interface ContributionCancelDismiss {
  type: Actions.APP_CANCEL_DISMISS;
}

export interface ContributionEditConfirm {
  type: Actions.CONTRIBUTIONEDIT_CONFIRM;
  payload: {
    uuid: string,
    rrsp: number,
    tfsa: number,
  }
}

export interface ContributionCancelConfirm {
  type: Actions.APP_CANCEL_CONFIRM;
  payload: {
    uuid: string
  }
}

export interface ContributionEditDismiss {
  type: Actions.CONTRIBUTIONEDIT_DISMISS;
}
