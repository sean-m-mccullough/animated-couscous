export enum Dialogs {
  contributionEdit = 'contributionEdit',
}
export type VisibleDialogs = Record<Dialogs, boolean>;

export interface WithDialogs {
  dialogs: VisibleDialogs;
}
