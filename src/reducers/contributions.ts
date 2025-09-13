import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { contributionsApi } from '../api/contributions';
import { Contributions } from '../types/contribution';

const contributionsSlice = createSlice({
  name: 'contributions',
  initialState: {} as Contributions,
  reducers: {
    cancelConfirm: (state, action: PayloadAction<{ uuid: string }>) => {
        // Note: The ACs didn't say specifically whether to delete or mark as cancelled, so I added the implemention for both.

        // delete contribution from state
        const { [action.payload.uuid]: deleted, ...rest } = state;
        return rest;
        
        // Set contribution status to "cancelled"
        // return {
        //     ...state,
        //     [action.payload.uuid]: {
        //         ...state[action.payload.uuid],
        //         status: Status.Cancelled,
        //     }
        // };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        contributionsApi.endpoints.updateContributions.matchFulfilled,
        (state, action) => {
          const contribution = action.payload;
          state[contribution.uuid] = contribution;
        }
      )
      .addMatcher(
        contributionsApi.endpoints.cancelContribution.matchFulfilled,
        (state, action) => {
          const contribution = action.payload;
          if (contribution.status === 'CANCELLED') {
            state[contribution.uuid] = contribution;
          } else {
            delete state[contribution.uuid];
          }
        }
      );
  },
});

// Export actions if you need them elsewhere
export const { cancelConfirm } = contributionsSlice.actions;

// This replaces your default export
export default contributionsSlice.reducer;
