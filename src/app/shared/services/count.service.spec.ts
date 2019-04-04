import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CountService } from './count.service';

let httpMock: HttpTestingController;
let service: CountService;

describe('CountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(CountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should call the correct API', () => {
      service.get();
      service.get().subscribe(result => {
        expect(result).toBe(23);
      });
      const testRequest = httpMock.expectOne(`http://localhost:1234/cars/count`);
      expect(testRequest.request.method).toEqual('GET');
      testRequest.flush(23);
      httpMock.verify();
    });
  });
});
