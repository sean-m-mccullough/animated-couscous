import { State } from '../types/store';
import { Contribution } from '../types/contribution';
import { createSelector } from '@reduxjs/toolkit';

export const get = ({ contributions }: State) => contributions;

export const getList = createSelector(get, contributions => Object.values<Contribution>(contributions));

export const getSelected = ({ selectedContribution }: State) => selectedContribution;
