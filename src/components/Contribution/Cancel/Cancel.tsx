import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useCancelContributionMutation } from '../../../api/contributions';
import { isVisible } from '../../../selectors/dialogs';
import { Dialogs } from '../../../types/dialog';
import { State } from '../../../types/store';
import { getSelected } from '../../../selectors/contributions';
import { dismiss } from './Cancel.actions';
import { Status } from '../../../types/contribution';
import classes from './Cancel.module.scss';


const ContributionCancel: React.FC = () => {
  const visible = useSelector<State, boolean>(state => isVisible(state, Dialogs.contributionCancel));
  const selectedContribution = useSelector(getSelected);
  const [cancelContribution, { isLoading }] = useCancelContributionMutation();
  const dispatch = useDispatch();


  async function handleCancel(): Promise<void> {
    if(selectedContribution && selectedContribution.status === Status.Pending) {
      try {
        await cancelContribution(selectedContribution.uuid).unwrap();
      } catch (error) {
        // Best to log this error in a real app to something like New Relic 
        console.error('Failed to cancel contribution:', error);
      } finally {
        dispatch(dismiss());
      }
    }
  }

  function handleClose(): void {
    dispatch(dismiss());
  }

  return (
    <Dialog open={!!visible}>
      <DialogTitle>Cancel Contribution</DialogTitle>
        <DialogContent className={classes}>
          <Typography
            component="p"
          >
            Are you sure you want to cancel this contribution?
          </Typography>
        </DialogContent>
        <DialogActions>
            <Button 
              onClick={handleCancel} 
              color="error" 
              disabled={isLoading}
            >
              {isLoading ? 'Cancelling...' : 'Yes'}
            </Button>
            <Button onClick={handleClose}>No</Button>
        </DialogActions>
    </Dialog>
  );
};

export default ContributionCancel;
