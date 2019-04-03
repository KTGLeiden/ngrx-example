import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CountService } from '../../shared/services/count.service';
import { CountActions } from './count.actions';

@Injectable()
export class CountEffects {
  constructor(private readonly actions$: Actions, private readonly countService: CountService) {}

  @Effect()
  public getCount$: Observable<Action> = this.actions$.pipe(
    ofType(CountActions.GET),
    switchMap(action =>
      this.countService.get().pipe(
        map(count => new CountActions.GetComplete(count)),
        catchError(() => of(new CountActions.GetError()))
      )
    )
  );
}
