export interface IAppState {
  count: number;
}

export const selectCount = (state: IAppState) => state.count;
