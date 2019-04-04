import { createSelector } from '@ngrx/store';
import { selectCount } from '../app-state.interface';

/** Interface for the count property of the state */
export interface ICount {
  value: number;
  isActive: boolean;
  error: boolean;
}

/** Select the value property of the count state */
export const selectCountValue = createSelector(
  selectCount,
  s => s.value
);
/** Select the isActive property of the count state */
export const selectCountIsActive = createSelector(
  selectCount,
  s => s.isActive
);
/** Select the error property of the count state */
export const selectCountError = createSelector(
  selectCount,
  s => s.error
);
