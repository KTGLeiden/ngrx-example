import { CountActions } from './count.actions';
import { ICount } from './count.interface';

const initialState: ICount = { error: false, isActive: false, value: 0 };

/** Reducer for counting cars */
export const countReducer = (state: ICount = initialState, action: CountActions.Actions): ICount => {
  switch (action.type) {
    case CountActions.INCREMENT:
      return { ...state, value: state.value + 1 };
    case CountActions.GET_COMPLETE:
      return { ...state, value: action.payload.count, isActive: false };
    case CountActions.GET_ERROR:
      return { ...state, error: true, isActive: false };
    case CountActions.GET:
      return { ...state, error: false, isActive: true };
    default:
      return state;
  }
};
