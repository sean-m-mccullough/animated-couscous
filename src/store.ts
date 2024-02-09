import addDays from 'date-fns/addDays';
import subMonths from 'date-fns/subMonths';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers';
import preloadedState from './store.json';
import { Contribution, Contributions } from './types/contribution';
import { State } from './types/store';


const transformState = ({ contributions, dialogs }: any, startDate: Date): State => ({
  dialogs,
  selectedContribution: null,
  contributions: contributions.reduce((result: Contributions, { uuid, status, tfsa, rrsp }: Contribution, index: number) => ({
    ...result,
    [uuid]: {
      uuid,
      status,
      tfsa,
      rrsp,
      total: tfsa + rrsp,
      date: subMonths(startDate, index).toISOString(),
    }
  }), {})
});

export const createStore = (startDate: Date) => 
  configureStore({
    reducer,
    preloadedState: transformState(preloadedState, startDate) as any
  });

const store = createStore(addDays(new Date(), 15));

export default store;
