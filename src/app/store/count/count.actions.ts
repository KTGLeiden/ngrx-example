import { Action } from '@ngrx/store';

export namespace CountActions {
  export const INCREMENT = '[COUNT] INCREMENT';
  export const GET = '[COUNT] GET';
  export const GET_ERROR = '[COUNT] GET_ERROR';
  export const GET_COMPLETE = '[COUNT] GET_COMPLETE';

  /** Action to increment the count */
  export class Increment implements Action {
    public readonly type = INCREMENT;
  }

  /** Action to get the count from an API */
  export class Get implements Action {
    public readonly type = GET;
  }

  /** Action to indicate getting the count is complete */
  export class GetComplete implements Action {
    public readonly type = GET_COMPLETE;
    public readonly payload: {
      count: number;
    };
    constructor(count: number) {
      this.payload = {
        count
      };
    }
  }

  /** Action to indicate the getting of count failed */
  export class GetError implements Action {
    public readonly type = GET_ERROR;
  }

  export type Actions = Increment | Get | GetComplete | GetError;
}
