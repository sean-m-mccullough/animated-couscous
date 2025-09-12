import { Actions } from '../../types/action';

export const dismiss = () => ({
  type: Actions.APP_CANCEL_DISMISS,
})

export const cancelConfirm = (uuid: string) => ({
  type: Actions.APP_CANCEL_CONFIRM, 
  payload: { uuid },
})
