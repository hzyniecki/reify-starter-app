import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReifyService {
  public errorMessage: any;
  public petStoreInventory = [{}];

  constructor(public http: HttpClient) {}

  ngOnInit() {}

  public getPetStoreInventory() {
    this.http
      .get<any>('https://petstore.swagger.io/v2/store/inventory')
      .subscribe({
        next: (data) => {
          this.petStoreInventory.push(data);
          console.log(this.petStoreInventory, 'mylog');
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        },
      });
  }
}
