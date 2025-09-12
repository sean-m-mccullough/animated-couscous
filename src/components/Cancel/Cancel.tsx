import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isVisible } from '../../selectors/dialogs';
import { Dialogs } from '../../types/dialog';
import { State } from '../../types/store';
import { getSelected } from '../../selectors/contributions';
import { dismiss, cancelConfirm } from './Cancel.actions';
import { Status } from '../../types/contribution';
import classes from './Cancel.module.scss';


const ContributionCancel: React.FC = () => {
  const visible = useSelector<State, boolean>(state => isVisible(state, Dialogs.contributionCancel));
  const selectedContribution = useSelector(getSelected);
  const dispatch = useDispatch();

  function handleCancel(): void {
    if(selectedContribution && selectedContribution.status === Status.Pending) {
      dispatch(cancelConfirm(selectedContribution.uuid));
    }
    dispatch(dismiss());
  }

  function handleClose(): void {
    dispatch(dismiss());
  }

  return (
    <Dialog open={!!visible} onClose={close}>
      <DialogTitle>Cancel Contribution</DialogTitle>
        <DialogContent className={classes}>
          <Typography
            component="p"
          >
            Are you sure you want to cancel this contribution?
          </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCancel}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
        </DialogActions>
    </Dialog>
  );
};

export default ContributionCancel;
