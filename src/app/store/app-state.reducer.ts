import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';
import { countReducer } from './count/count.reducer';

/** Reducer for our rootstate */
export const appStateReducer: ActionReducerMap<IAppState> = {
  count: countReducer
};
