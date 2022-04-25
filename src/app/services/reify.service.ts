import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReifyService {
  public errorMessage: any;
  public petStoreInventory = [{}];

  constructor(public http: HttpClient) {}

  ngOnInit() {}

  public getPetStoreInventory(): any {
    return this.http.get('https://petstore.swagger.io/v2/store/inventory').pipe(
      catchError((err) => {
        return throwError(() => new err());
      })
    );
  }
}
