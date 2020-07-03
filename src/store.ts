import addDays from 'date-fns/addDays';
import subMonths from 'date-fns/subMonths';
import { createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';
import preloadedState from './store.json';
import { Contributions } from './types/contribution';
import { State } from './types/store';

const transformState = ({ contributions, dialogs }: any, startDate: Date): State => ({
  dialogs,
  selectedContribution: null,
  contributions: contributions.reduce((result: Contributions, { uuid, status, tfsa, rrsp }: any, index: number) => ({
    ...result,
    [uuid]: {
      uuid,
      status,
      tfsa,
      rrsp,
      total: tfsa + rrsp,
      date: subMonths(startDate, index),
    }
  }), {})
});

export const createStore = (startDate: Date) => 
  reduxCreateStore(rootReducer, transformState(preloadedState, startDate), composeWithDevTools());

const store = createStore(addDays(new Date(), 15));

export default store;
