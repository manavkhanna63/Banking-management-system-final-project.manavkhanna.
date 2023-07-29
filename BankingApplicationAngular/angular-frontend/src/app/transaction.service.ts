import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FundTransfer } from './fund-transfer';
import { Observable, catchError } from 'rxjs';
import { FundDeposit } from './fund-deposit';
import { FundWithdraw } from './fund-withdraw';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  url = "http://localhost:8080/transactions";

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { 
  }

  transferFund(fundTransfer: FundTransfer): Observable<any> {
    return this.httpClient.post(`${this.url}/transfer`, fundTransfer, this.httpHeader);
  }

  depositFund(fundDeposit: FundDeposit): Observable<any> {
    return this.httpClient.post(`${this.url}/deposit`, fundDeposit, this.httpHeader);
  }

  withdrawFund(fundWithdraw: FundWithdraw): Observable<any> {
    return this.httpClient.post(`${this.url}/withdraw`, fundWithdraw, this.httpHeader);
  }

  getAccountStatementsByAccountNumber(accountNumber: any): Observable<any> {
    return this.httpClient.get(`${this.url}/statement/${accountNumber}`, this.httpHeader);
  }

  getTransactionsByAccountNumber(accountNumber: any): Observable<any> {
    return this.httpClient.get(`${this.url}/${accountNumber}`, this.httpHeader);
  }

}
