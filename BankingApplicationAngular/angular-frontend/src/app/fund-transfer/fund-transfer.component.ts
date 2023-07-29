import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { FundTransfer } from '../fund-transfer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {

  fundTransfer : FundTransfer = new FundTransfer();

  constructor(private service: TransactionService, private router: Router){
  }

  transferFund(){
    this.service.transferFund(this.fundTransfer).subscribe(data => 
      console.log(data), error => 
      console.log(error));
      this.fundTransfer = new FundTransfer();
  }
}
