import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState, selectCount } from './store';
import { CountActions } from './store/count/count.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public count$: Observable<number>;

  constructor(private readonly store: Store<IAppState>) {}

  ngOnInit() {
    this.count$ = this.store.pipe(select(selectCount));
  }
  public increment() {
    this.store.dispatch(new CountActions.Increment());
  }
  public get() {
    this.store.dispatch(new CountActions.Get());
  }
}
