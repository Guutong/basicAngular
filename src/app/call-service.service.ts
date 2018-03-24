import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CallServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(
        'http://592d1b27e06a4a00113ceade.mockapi.io/guutong/employee'
      )
      .pipe(
        tap(res => console.log('tap log: ', res)),
        catchError(err => of([]))
      );
  }

  addData(item): Observable<Employee> {
    return this.http
      .post<Employee>(
        'http://592d1b27e06a4a00113ceade.mockapi.io/guutong/employee',
        item
      )
      .pipe(
        tap(res => console.log('tap log: ', res)),
        catchError(err => of(err))
      );
  }

  updateData(item): Observable<Employee> {
    console.log(item);
    return this.http
      .put<Employee>(
        `http://592d1b27e06a4a00113ceade.mockapi.io/guutong/employee/${item.id}`,
        item
      )
      .pipe(
        tap(res => console.log('tap log: ', res)),
        catchError(err => of(err))
      );
  }

  deleteData(item): Observable<Employee[]> {
    return this.http
      .delete<Employee>(
        `http://592d1b27e06a4a00113ceade.mockapi.io/guutong/employee/${item.id}`
      )
      .pipe(
        tap(res => console.log('tap log: ', res)),
        catchError(err => of(err))
      );
  }
}
