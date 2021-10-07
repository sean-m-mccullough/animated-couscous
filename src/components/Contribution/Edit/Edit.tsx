import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
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
            <DialogContent classes={{ root: classes.content }}>
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
