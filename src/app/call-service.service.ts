import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CallServiceService {

  mockData: Employee[] = [
    {
      id: 1,
      name: 'Ant'
    },
    {
      id: 2,
      name: 'Bat'
    },
    {
      id: 3,
      name: 'Cat'
    }
  ];

  constructor(private http: HttpClient) { }

  getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://592d1b27e06a4a00113ceade.mockapi.io/guutong/list').pipe(
      tap(res => console.log('tap log: ', res)),
      catchError(err => of(this.mockData))
    );
  }

}
