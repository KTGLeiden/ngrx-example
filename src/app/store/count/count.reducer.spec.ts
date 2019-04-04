import { CountActions } from './count.actions';
import { ICount } from './count.interface';
import { countReducer as reducer } from './count.reducer';

const initialState: ICount = { error: false, isActive: false, value: 0 };

describe('reducer', () => {
  describe('on CountActions.GET_ERROR', () => {
    it('should set error to true', () => {
      expect(reducer(initialState, new CountActions.GetError())).toEqual({ ...initialState, error: true });
    });
  });
  describe('on CountActions.GET', () => {
    it('should set error to false and isActive to true', () => {
      expect(reducer({ ...initialState, error: true }, new CountActions.Get())).toEqual({ ...initialState, isActive: true });
    });
  });
  describe('on CountActions.INCREMENT', () => {
    it('should increment value by 1', () => {
      expect(reducer(initialState, new CountActions.Increment())).toEqual({ ...initialState, value: initialState.value + 1 });
    });
  });
  describe('on CountActions.GET_COMPLETE', () => {
    it('should return the value of the action', () => {
      expect(reducer(initialState, new CountActions.GetComplete(50))).toEqual({ ...initialState, value: 50 });
    });
  });
  it('should return the current state by default', () => {
    const state = { ...initialState, value: 230 };
    expect(reducer(state, <any>{})).toBe(state);
  });
  it('should return initialState by default', () => {
    expect(reducer(undefined, <any>{})).toEqual(initialState);
  });
});
