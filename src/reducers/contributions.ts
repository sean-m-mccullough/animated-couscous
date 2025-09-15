import { createSlice } from '@reduxjs/toolkit';
import { contributionsApi } from '../api/contributions';
import { Contributions } from '../types/contribution';

const contributionsSlice = createSlice({
  name: 'contributions',
  initialState: {} as Contributions,
  reducers: {
    // After a solid 25 minutes. Now I know that no local reducers are needed when RTK Query handles state updates 🤦
  },
  extraReducers: (builder) => {
    builder
        .addMatcher(
            contributionsApi.endpoints.updateContributions.matchFulfilled,
            (state, action) => {
                console.log(action.payload);
                const contribution = action.payload;
                state[contribution.uuid] = contribution;
            }
        )
        .addMatcher(
            contributionsApi.endpoints.cancelContribution.matchFulfilled,
            (state, action) => {
                console.log(action.payload);
                const contribution = action.payload;
                // API returns the "cancelled" status so it zeros out amounts based on the returned mock data
                if (contribution.status === 'CANCELLED') {
                    state[contribution.uuid] = contribution;
                } else {
                    delete state[contribution.uuid];
                }
            }
        );
    },
});

export const { } = contributionsSlice.actions;

export default contributionsSlice.reducer;
