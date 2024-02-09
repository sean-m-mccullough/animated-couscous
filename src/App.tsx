import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Contributions from './components/Contributions/Contributions';
import ContributionEdit from './components/Contribution/Edit/Edit';
import { getSelected } from './selectors/contributions';
import { edit } from './App.actions';

const App: React.FC = () => {
  const selected = useSelector(getSelected);
  const dispatch = useDispatch();

  return (
    <>
      <Card elevation={0}>
        <CardHeader title="My Contributions" />
        <CardContent>
          <Contributions />
        </CardContent>
        <CardActions>
          <Button disabled={!selected} onClick={() => dispatch(edit())}>Edit</Button>
          <Button disabled={!selected}>Cancel</Button>
        </CardActions>
      </Card>
      <ContributionEdit />
    </>
  );
}

export default App;
