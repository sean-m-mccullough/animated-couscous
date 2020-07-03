import { State } from '../types/store';
import { Contribution } from '../types/contribution';

export const get = ({ contributions }: State) => contributions;

export const getList = (state: State) => Object.values<Contribution>(get(state));

export const getSelected = ({ selectedContribution }: State) => selectedContribution;
