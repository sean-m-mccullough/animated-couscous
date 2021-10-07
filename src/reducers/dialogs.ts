import { Action, Actions } from '../types/action';
import { VisibleDialogs, Dialogs } from '../types/dialog';

const defaultState = {
  [Dialogs.contributionEdit]: false,
};

const dialogs = (state: VisibleDialogs = defaultState, action: Action) => {
  switch(action.type) {
    case Actions.APP_EDIT:
      return {
        ...state,
        [Dialogs.contributionEdit]: true,
      };
    case Actions.CONTRIBUTIONEDIT_DISMISS:
      return {
        ...state,
        [Dialogs.contributionEdit]: false,
      };
    default:
      return state;
  }
};

export default dialogs;
