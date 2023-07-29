import { Component } from '@angular/core';
import { FundDeposit } from '../fund-deposit';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-fund-deposit',
  templateUrl: './fund-deposit.component.html',
  styleUrls: ['./fund-deposit.component.css']
})
export class FundDepositComponent {
  fundDeposit : FundDeposit = new FundDeposit();
  
  constructor(private service: TransactionService){
  }

  depositFund(){
    this.service.depositFund(this.fundDeposit).subscribe(data => 
      console.log(data), error =>
      console.log(error));
      this.fundDeposit = new FundDeposit();
  }
}
