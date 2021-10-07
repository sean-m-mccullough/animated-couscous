import { Actions } from '../../../types/action';
import { ContributionEditDismiss } from '../../../types/action/contributions';

export const dismiss = (): ContributionEditDismiss => ({
  type: Actions.CONTRIBUTIONEDIT_DISMISS,
})
