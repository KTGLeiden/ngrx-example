import { ICount } from './count/count.interface';

/** Root state of our application */
export interface IAppState {
  count: ICount;
}

/** Selects the count property of the appstate */
export const selectCount = (state: IAppState) => state.count;
