import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form } from 'formik';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useUpdateContributionsMutation } from '../../../api/contributions';
import { isVisible } from '../../../selectors/dialogs';
import { getSelectedForEdit } from '../../../selectors/contributions';
import { Dialogs } from '../../../types/dialog';
import { State } from '../../../types/store';
import { Status } from '../../../types/contribution';
import Tfsa from '../../Tfsa/Tfsa';
import Rrsp from '../../Rrsp/Rrsp';
import { dismiss } from './Edit.actions';
import classes from './Edit.module.scss';

const ContributionEdit: React.FC = () => {
  const visible = useSelector<State, boolean>(state => isVisible(state, Dialogs.contributionEdit));
  const [updateContribution, { isLoading }] = useUpdateContributionsMutation();
  const selectedContribution = useSelector(getSelectedForEdit);
  const dispatch = useDispatch();

  // Memoize to prevent unnecessary re-renders
  const handleSubmit = useCallback(async (values: { rrsp: number, tfsa: number }): Promise<void> => {
    if(selectedContribution && selectedContribution.status === Status.Pending) {
      try {
        await updateContribution({
          uuid: selectedContribution.uuid,
          data: values
        }).unwrap();
      } catch (error) {
        // Best to log this error in a real app to something like New Relic 
        console.error('Failed to edit contribution:', error);
      } finally {
        dispatch(dismiss());
      }
    }
  }, [selectedContribution, updateContribution, dispatch]);

  // Memoize to prevent unnecessary re-renders
  const handleClose: () => void = useCallback((): void => {
    dispatch(dismiss());
  }, [dispatch]);

  return (
    <Dialog open={!!visible}>
      <DialogTitle>Edit Contribution</DialogTitle>
      <Formik initialValues={{
        rrsp: selectedContribution?.rrsp || 0,
        tfsa: selectedContribution?.tfsa || 0,
      }} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <DialogContent classes={classes}>
              <Rrsp />
              <Tfsa />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button 
                type="submit"
                disabled={isLoading}
              >
                { isLoading ? 'Updating...' : 'Accept'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ContributionEdit;
