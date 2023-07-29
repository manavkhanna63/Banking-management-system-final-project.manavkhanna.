import { Injectable, OnInit } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit{

  url: string = "http://localhost:8080/customers";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  registerCustomer(customer: Customer): Observable<Customer>{
    return this.httpClient.post<any>(`${this.url}`, customer);
  }

  getCustomerList(){
    return this.httpClient.get<Customer[]>(`${this.url}`);
  }


}
