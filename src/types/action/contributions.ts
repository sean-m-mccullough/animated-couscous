import { Actions } from '../action';
import { WithContribution } from '../contribution';

export interface ContributionSelect extends WithContribution {
  type: Actions.CONTRIBUTION_SELECT;
}

export interface ContributionEdit {
  type: Actions.APP_EDIT;
}

export interface ContributionEditDismiss {
  type: Actions.CONTRIBUTIONEDIT_DISMISS;
}
