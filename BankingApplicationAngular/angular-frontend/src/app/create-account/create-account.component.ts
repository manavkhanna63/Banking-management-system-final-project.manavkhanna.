import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  
  constructor(private service: AccountService, private router: Router){}

  account: Account = new Account();

  createAccount(){
    this.service.createAccount(this.account).subscribe(data => {
      this.account = new Account();
    });
    this.router.navigate(['/account-list']);
  }
}
