import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit{
  accountNumber!:number;
  account: Account = new Account();

  ngOnInit(): void {
    this.accountNumber = this.route.snapshot.params['accountNumber'];
    this.deleteAccountByAccountNumber(this.accountNumber);
  }
  
  constructor(private service: AccountService, private router: Router, private route: ActivatedRoute){}

  deleteAccountByAccountNumber(accountNumber: number){
    this.service.DeleteAccountByAccountNumber(this.account.accountNumber).subscribe(data => {
      console.log(data);
      this.router.navigate(['/account-list']);
    });
  }

}
