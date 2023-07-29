import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FundDepositComponent } from './fund-deposit/fund-deposit.component';
import { FundWithdrawComponent } from './fund-withdraw/fund-withdraw.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AccountStatementDetailsComponent } from './account-statement-details/account-statement-details.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AccountListComponent } from './account-list/account-list.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';

@NgModule({
  declarations: [
    AppComponent,
    FundTransferComponent,
    NavBarComponent,
    FundDepositComponent,
    FundWithdrawComponent,
    AccountStatementComponent,
    AccountStatementDetailsComponent,
    RegisterCustomerComponent,
    CreateAccountComponent,
    CustomerListComponent,
    AccountListComponent,
    DeleteAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
