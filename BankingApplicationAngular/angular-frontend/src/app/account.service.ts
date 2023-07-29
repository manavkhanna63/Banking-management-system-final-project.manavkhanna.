import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = "http://localhost:8080/accounts";

  constructor(private httpClient: HttpClient) {}

  getAccountList(): Observable<any>{
    return this.httpClient.get(`${this.url}`);
  }

  createAccount(account: Account): Observable<any>{
    return this.httpClient.post(`${this.url}`, account);
  }

  DeleteAccountByAccountNumber(accountNumber: number): Observable<any>{
    return this.httpClient.delete(`${this.url}/${accountNumber}`);
  }
}
