import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import format from 'date-fns/format';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contributionSelect } from '../../actions/contribution';
import { getSelected } from '../../selectors/contributions';
import { WithContribution } from '../../types/contribution';
import Status from './Status/Status';

type Props = WithContribution;

const Contribution: React.FC<Props> = ({ contribution }) => {
  const { uuid, total, status, date } = contribution;
  const dispatch = useDispatch();
  const selected = useSelector(getSelected);

  return (
    <ListItem
      onClick={() => dispatch(contributionSelect(contribution))}
      selected={!!selected && selected.uuid === uuid}
      button
    >
      <ListItemText
        primary={
          <Typography variant="body1">{format(date, 'PPP')}</Typography>
        }
        secondary={
          <Typography variant="body2">
            ${total}
            <Status status={status} />
          </Typography>
        }
        disableTypography
      />
    </ListItem>
  );
};

export default Contribution;
