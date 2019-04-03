import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';
import { countReducer } from './count/count.reducer';

export const appStateReducer: ActionReducerMap<IAppState> = {
  count: countReducer
};
