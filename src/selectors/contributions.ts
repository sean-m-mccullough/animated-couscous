import { State } from '../types/store';
import { Contribution } from '../types/contribution';
import { createSelector } from '@reduxjs/toolkit';

export const get = ({ contributions }: State) => contributions;

export const getList = createSelector(get, contributions => Object.values<Contribution>(contributions));

export const getSelected = ({ selectedContribution }: State) => selectedContribution;

// Memoized selector to remove the possibility of unnecessary re-renders due to reference equality
export const getSelectedForEdit = createSelector(
    [getSelected],
    (selectedContribution) => selectedContribution ? {
        uuid: selectedContribution.uuid,
        rrsp: selectedContribution.rrsp,
        tfsa: selectedContribution.tfsa,
        status: selectedContribution.status
    } : null
);  