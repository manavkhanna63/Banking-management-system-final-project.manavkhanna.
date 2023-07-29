import { Component } from '@angular/core';
import { FundWithdraw } from '../fund-withdraw';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-withdraw',
  templateUrl: './fund-withdraw.component.html',
  styleUrls: ['./fund-withdraw.component.css']
})
export class FundWithdrawComponent {
  fundWithdraw : FundWithdraw = new FundWithdraw();

  constructor(private service: TransactionService, private router: Router){
  }
  
  withdrawFund(){
    this.service.withdrawFund(this.fundWithdraw).subscribe(data => 
      console.log(data), error =>
      console.log(error));
      this.fundWithdraw = new FundWithdraw();
  }
}
