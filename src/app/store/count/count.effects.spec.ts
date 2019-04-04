import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { CountService } from '../../shared/services/count.service';
import { CountActions } from './count.actions';
import { CountEffects } from './count.effects';

describe('countEffects', () => {
  let effects: CountEffects;
  let actions$: Observable<any>;
  let countService: CountService;
  const countServiceMock = { get() {} };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [CountEffects, provideMockActions(() => actions$), { provide: CountService, useValue: countServiceMock }]
    });
    effects = TestBed.get(CountEffects);
    countService = TestBed.get(CountService);
  });

  describe('getCount$', () => {
    describe('if service returns value', () => {
      it('should return getcomplete action', () => {
        actions$ = cold('a', { a: new CountActions.Get() });
        spyOn(countService, 'get').and.returnValue(of(35));
        expect(effects.getCount$).toBeObservable(cold('b', { b: new CountActions.GetComplete(35) }));
      });
    });
    describe('if service returns error', () => {
      it('should return GetError action', () => {
        actions$ = cold('a', { a: new CountActions.Get() });
        spyOn(countService, 'get').and.returnValue(throwError({}));
        expect(effects.getCount$).toBeObservable(cold('b', { b: new CountActions.GetError() }));
      });
    });
  });
});
