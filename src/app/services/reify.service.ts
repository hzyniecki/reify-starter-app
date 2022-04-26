import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReifyService {
  public errorMessage: any;
  public pageNumber = '';
  public pagesize = '';

  constructor(public http: HttpClient) {}

  ngOnInit() {}

  public getTrialsId(pageSize?, pageNumber?): any {
    return this.http
      .get('https://frontend-interview-20210623.herokuapp.com/trials')
      .pipe(
        catchError((err) => {
          return throwError(() => new err());
        })
      );
  }
}
