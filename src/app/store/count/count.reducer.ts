import { CountActions } from './count.actions';

export const countReducer = (state: number = 0, action: CountActions.Actions): number => {
  switch (action.type) {
    case CountActions.INCREMENT:
      return state + 1;
    case CountActions.GET_COMPLETE:
      return action.payload.count;
    default:
      return state;
  }
};
