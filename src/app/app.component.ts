import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from './store';
import { CountActions } from './store/count/count.actions';
import { selectCountError, selectCountIsActive, selectCountValue } from './store/count/count.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
/** Appcomponent, root component of our app */
export class AppComponent implements OnInit {
  /** The current count */
  public count$: Observable<number>;
  public error$: Observable<boolean>;
  public isActive$: Observable<boolean>;

  constructor(private readonly store: Store<IAppState>) {}

  /** Runs on initialization */
  public ngOnInit() {
    this.count$ = this.store.pipe(select(selectCountValue));
    this.error$ = this.store.pipe(select(selectCountError));
    this.isActive$ = this.store.pipe(select(selectCountIsActive));
  }

  /** Dispatches an increment action */
  public increment() {
    this.store.dispatch(new CountActions.Increment());
  }

  /** dispatches a get action */
  public get() {
    this.store.dispatch(new CountActions.Get());
  }
}
