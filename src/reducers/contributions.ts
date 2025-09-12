import { Action, Actions } from '../types/action';
import { Status } from '../types/contribution';
import { Contributions } from '../types/contribution';

const contributions = (state: Contributions = {}, action: Action) => {
    switch (action.type) {
        case Actions.APP_CANCEL_CONFIRM: {
            return {
                ...state,
                [action.payload.uuid]: {
                    ...state[action.payload.uuid],
                    status: Status.Cancelled,
                }
            };
        }
        default:
            return state;
    }
};

export default contributions;
