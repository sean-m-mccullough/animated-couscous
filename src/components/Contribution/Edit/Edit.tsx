import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form } from 'formik';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isVisible } from '../../../selectors/dialogs';
import { Dialogs } from '../../../types/dialog';
import { State } from '../../../types/store';
import Tfsa from '../../Tfsa/Tfsa';
import Rrsp from '../../Rrsp/Rrsp';
import { dismiss } from './Edit.actions';
import classes from './Edit.module.scss';

const ContributionEdit: React.FC = () => {
  const visible = useSelector<State, boolean>(state => isVisible(state, Dialogs.contributionEdit));
  const dispatch = useDispatch();
  const close = () => dispatch(dismiss());

  return (
    <Dialog open={!!visible} onClose={close}>
      <DialogTitle>Edit Contribution</DialogTitle>
      <Formik initialValues={{}} onSubmit={() => undefined}>
        {() => (
          <Form>
            <DialogContent classes={classes}>
              <Rrsp />
              <Tfsa />
            </DialogContent>
            <DialogActions>
              <Button onClick={close}>Cancel</Button>
              <Button onClick={close}>Accept</Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ContributionEdit;
