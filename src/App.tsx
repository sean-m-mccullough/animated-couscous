import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contributionEdit } from './actions/contribution';
import Contributions from './components/Contributions/Contributions';
import ContributionEdit from './components/ContributionEdit/ContributionEdit';
import { getSelected } from './selectors/contributions';

const App = () => {
  const selected = useSelector(getSelected);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <CardHeader title="My Contributions" />
        <CardContent>
          <Contributions />
        </CardContent>
        <CardActions>
          <Button disabled={!selected} onClick={() => dispatch(contributionEdit())}>Edit</Button>
          <Button disabled={!selected}>Cancel</Button>
        </CardActions>
      </Card>
      <ContributionEdit />
    </>
  );
}

export default App;
