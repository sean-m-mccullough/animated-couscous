import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Contributions from './components/Contributions/Contributions';
import ContributionEdit from './components/Contribution/Edit/Edit';
import { Status } from './types/contribution';
import { getSelected } from './selectors/contributions';
import { edit } from './App.actions';

const App: React.FC = () => {
  const selected = useSelector(getSelected);
  const actionableSelection = !!selected && selected.status === Status.Pending;

  const dispatch = useDispatch();

  function handleEdit(): void {
    dispatch(edit());
  }

  return (
    <>
      <Card elevation={0}>
        <CardHeader title="My Contributions" />
        <CardContent>
          <Contributions />
        </CardContent>
        <CardActions>
          <Button disabled={!actionableSelection} onClick={handleEdit}>Edit</Button>
          <Button disabled={!actionableSelection}>Cancel</Button>
        </CardActions>
      </Card>
      <ContributionEdit />
    </>
  );
}

export default App;
