import List from '@material-ui/core/List';
import React from 'react';
import { useSelector } from 'react-redux';

import { getList } from '../../selectors/contributions';
import Contribution from '../Contribution/Contribution';

const Contributions: React.FC = () => {
  const contributions = useSelector(getList);

  return (
    <List>
      {contributions.map(
        contribution => <Contribution key={contribution.uuid} contribution={contribution} />
      )}
    </List>
  );
};

export default Contributions;
