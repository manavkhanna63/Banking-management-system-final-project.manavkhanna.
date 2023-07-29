import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{
  accounts: Account[] = [];

  constructor(private service: AccountService){}

  ngOnInit(): void {
    this.getAccountList();
  }
  
  getAccountList(){
    this.service.getAccountList().subscribe(data => {
      this.accounts = data;
    });
  }
}
