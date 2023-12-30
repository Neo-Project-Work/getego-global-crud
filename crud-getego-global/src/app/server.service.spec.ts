import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TASKS } from './mock-data/mock-data';
import { ServerService } from './server.service';

describe('ServerService', () => {
  let service: ServerService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ServerService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //POST METHOD
  it('should get all  task', () => {
    let data = {title:'JavaScript'}
    service.create(data).subscribe((tasks: any) => {
      expect(tasks).toBeTruthy();
    });
    const mockReq = testingController.expectOne('http://localhost:3000/posts');
    expect(mockReq.request.method).toEqual('POST');
    mockReq.flush(Object.values(TASKS));
  });

  // GET ALL METHOD
  it('should get all  task', () => {
    service.getAll().subscribe((tasks: any) => {
      expect(tasks).toBeTruthy();
    });
    const mockReq = testingController.expectOne('http://localhost:3000/posts');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(TASKS));
  });

  // DELETE METHOD
  it('should delete task by id', () => {
    service.delete(1).subscribe((task: any) => {
      expect(task).toBeTruthy();
    });
    const mockReq = testingController.expectOne(
      'http://localhost:3000/posts/1'
    );
    expect(mockReq.request.method).toEqual('DELETE');
  });

  // UPDATE METHOD
  it('should update task by id', () => {
    let changes = { createdBy: 'Neo Jusha' };
    service.update(changes, 1).subscribe((task: any) => {
      expect(task).toBeTruthy();
      expect(task.id).toBe(1);
    });
    const mockReq = testingController.expectOne(
      'http://localhost:3000/posts/1'
    );
    expect(mockReq.request.method).toEqual('PUT');
  });



  afterEach(() => {
    testingController.verify();
  });
});
