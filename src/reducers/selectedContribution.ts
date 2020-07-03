import { Action, Actions } from '../types/action';
import { Contribution } from '../types/contribution';

const selectedContribution = (state: Nullable<Contribution> = null, action: Action) => {
  switch(action.type) {
    case Actions.CONTRIBUTION_SELECT:
      return {
        ...action.contribution
      };
    default:
      return state;
  }
};

export default selectedContribution;
