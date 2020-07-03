import { WithContributions, WithSelectedContribution } from './contribution';
import { WithDialogs } from './dialog';

export type State = WithContributions
  & WithSelectedContribution
  & WithDialogs
  ;
