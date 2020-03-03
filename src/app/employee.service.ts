import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  private _url: string = '/assets/data/employees.json';

  constructor( private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(){
    return Observable.throwError(Error.message || "err");
  }

}
