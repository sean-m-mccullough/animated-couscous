import Badge from '@material-ui/core/Badge';
import React from 'react';

import { Contribution, Status as StatusType } from '../../../types/contribution';
import classes from './Status.module.scss';

type Props = Pick<Contribution, 'status'>;

const Status: React.FC<Props> = ({ status }) => 
  status === StatusType.Pending ? 
    <Badge badgeContent={status} color="primary" classes={classes} /> : null

export default Status;
