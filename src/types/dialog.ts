export enum Dialogs {
  contributionEdit = 'contributionEdit',
  contributionCancel = 'contributionCancel',
}
export type VisibleDialogs = Record<Dialogs, boolean>;

export interface WithDialogs {
  dialogs: VisibleDialogs;
}
