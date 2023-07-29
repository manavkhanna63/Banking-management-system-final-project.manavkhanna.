import { Component, Input, OnInit } from '@angular/core';
import { AccountStatement } from '../account-statement';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { JsonPipe } from '@angular/common';
import { AccountStatementRequest } from '../account-statement-request';

@Component({
  selector: 'app-account-statement-details',
  templateUrl: './account-statement-details.component.html',
  styleUrls: ['./account-statement-details.component.css']
})
export class AccountStatementDetailsComponent implements OnInit{
  
  accountNumber! : number;
  accountStatement : AccountStatement = new AccountStatement();
  transaction: Transaction = new Transaction();
  transactions: any[] = [];

  
  constructor(private route: ActivatedRoute, private service: TransactionService) { }

  ngOnInit(): void {
    this.accountNumber = this.route.snapshot.params['accountNumber'];
    this.getAccountStatementByAccountNumber(this.accountNumber);
    this.getAccountTransactionsByAccountNumber(this.accountNumber);
  }

  getAccountStatementByAccountNumber(accountNumber: number): void {
    this.service.getAccountStatementsByAccountNumber(accountNumber).subscribe(data => {
      this.accountStatement = data;
    });
  }

  getAccountTransactionsByAccountNumber(accountNumber: number): void {
    this.service.getTransactionsByAccountNumber(accountNumber).subscribe(data => {
      this.transactions = data;
    });
  }
}
