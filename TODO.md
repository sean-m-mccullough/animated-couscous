1) Hour 1\
    a) Review/Read README \
    b) run `npm i && npm run dev` to install deps and start Vite app \
    d) Walk through existing app and work \
    e) Create status update \
    f) Refreshed myself on Redux \
    g) Update logic to only action on "Pending" contributions \
    h) Created a "Confirm Cancel modal" for cancelling "Pending" requests \
    i) Update snapshots, if time permits, create new test for Cancel dialog \



Status Update 1e \
[x] List on Contribution page listing past and pending contributions is completed. \
[] Edit functionality - A user can raise a modal to edit any contribution (not just pending contributions), but altering a contribution does nothing. \
[] Cancel functionality - A user can not yet cancel pending contributions. \


2) Hour 2 \
    a) Create a Github repo - Ran into some issue with committing to a detached head. Download was still tied to its initial repo (https://bitbucket.org/cwretirementeng/frontend-code-test.git) \
    b) Add PUT and DELETE calls and mocks \
    c) ~~Show/ store contribution details on click (amounts contributed to RRSPs and/or TFSAs )~~ \
    d) ~~Update tests~~ \

3) Optimizations \
    a) Implemented useCallBack with handle functions \
    b) Created a memoized selected with RTK for edits \
    Note: I think memo() could also be used to wrap components, it seems appropiate given the use of different hooks, which could result in re-renders.


Notes: 
- I haven't used Redux in probably 5yrs so I had to hit the docs and find a video tutorial to refresh myself.
- RTK Query is new to me, I had to rely on a quick Google search and Co-Pilot to help explain how to implement it into the storeConfiguration. It's usage in components is exactly the same as any other hook based query/fetch libraries like SWR or TanStack Query.
- !!! I didn't realize that RTK Query was creating it's own slice of state completely separate from the contributions state. I burnt most of my time trying to figure this out. I had to implement a createSlice with extraReducer to cleanly use/update the contributions state and listen for RTK Query mutations. It probably would make more sense to use RTK Query everywhere for consistency, but call me naive on this one.😭
- I didn't get time to write tests or make the update to the UI that I wanted 💩

- One thing I found interesting was the use of React.FC over plain function components. I believe the trend and what the React team recommends is toward the latter for clearer intent and not having to explicitly import React. There are props and cons of both. I prefer plain functions but love to hear others opinions.