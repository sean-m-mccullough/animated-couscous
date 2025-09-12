import Badge, { BadgeOwnProps } from '@mui/material/Badge';
import React from 'react';

import { Contribution, Status as StatusType } from '../../../types/contribution';
import classes from './Status.module.scss';

type Props = Pick<Contribution, 'status'>;

const color: Record<StatusType, BadgeOwnProps['color']> = {
  [StatusType.Pending]: 'info',
  [StatusType.Cancelled]: 'warning',
  [StatusType.Processed]: 'success'
}

const Status: React.FC<Props> = ({ status }) => {
  return (
      <Badge badgeContent={status} color={color[status]} classes={classes} />
  );
}

export default Status;
