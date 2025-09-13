import { combineReducers } from 'redux';

import contributions from './contributions';
import dialogs from './dialogs';
import selectedContribution from './selectedContribution';
import { contributionsApi } from '../api/contributions';

export default combineReducers({
  contributions,
  dialogs,
  selectedContribution,
  [contributionsApi.reducerPath]: contributionsApi.reducer
});
