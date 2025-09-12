import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns/format';
import { parseISO as partISO } from 'date-fns/parseISO';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSelected } from '../../selectors/contributions';
import { WithContribution } from '../../types/contribution';
import { select } from './Contribution.actions';
import Status from './Status/Status';
import classes from './Contribution.module.scss'

type Props = WithContribution;

const Contribution: React.FC<Props> = ({ contribution }) => {
  const { uuid, total, status, date } = contribution;
  const dispatch = useDispatch();
  const selected = useSelector(getSelected);

  return (
    <ListItemButton
    classes={classes}
      onClick={() => dispatch(select(contribution))}
      selected={!!selected && selected.uuid === uuid}
    >
      <ListItemText
        primary={
          <Typography variant="body1">{format(partISO(date), 'PPP')}</Typography>
        }
        secondary={
          <Typography variant="body2">
            <span>${total}</span>
            <Status status={status} />
          </Typography>
        }
        disableTypography
      />
    </ListItemButton>
  );
};

export default Contribution;
