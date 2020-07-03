import { Dialogs } from '../types/dialog';
import { State } from '../types/store';

export const get = ({ dialogs }: State) => dialogs;

export const isVisible = (state: State, dialog: Dialogs) => get(state)[dialog];
