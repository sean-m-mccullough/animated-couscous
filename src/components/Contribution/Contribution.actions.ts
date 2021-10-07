import { Actions } from '../../types/action';
import { Contribution } from '../../types/contribution';

export const select = (contribution: Contribution) => ({
  contribution,
  type: Actions.CONTRIBUTION_SELECT,
});
