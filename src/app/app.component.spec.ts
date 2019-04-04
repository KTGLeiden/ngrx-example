import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { AppComponent } from './app.component';
import { IAppState } from './store';
import { CountActions } from './store/count/count.actions';

const initialState: IAppState = { count: { error: false, isActive: false, value: 0 } };
let store: Store<IAppState>;
let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;

    store = TestBed.get(Store);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should select the count property from the store', () => {
      component.ngOnInit();
      expect(component.count$).toBeObservable(cold('a', { a: 0 }));
    });
    it('should select the error property from the store', () => {
      component.ngOnInit();
      expect(component.error$).toBeObservable(cold('a', { a: false }));
    });
    it('should select the isActive property from the store', () => {
      component.ngOnInit();
      expect(component.isActive$).toBeObservable(cold('a', { a: false }));
    });
  });

  describe('increment', () => {
    it('should dispatch an increment action ', () => {
      spyOn(store, 'dispatch');
      component.increment();
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(new CountActions.Increment());
    });
  });
});
