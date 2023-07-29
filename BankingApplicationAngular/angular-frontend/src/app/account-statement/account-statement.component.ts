import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit{
  accountNumber! : number;
  transactions: any[] = [];

  constructor(private service: TransactionService, private router: Router){
  }

  ngOnInit(): void {
  }

  getAccountStatementByAccountNumber(accountNumber: number){
    this.getAccountTransactionsByAccountNumber(accountNumber);
    this.router.navigate(['/getByAccountNumber', accountNumber]);
  }

  getAccountTransactionsByAccountNumber(accountNumber: number): void {
    this.service.getTransactionsByAccountNumber(accountNumber).subscribe(data => {
      this.transactions = data;
    });
  }


}
