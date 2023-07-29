import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { FundDepositComponent } from './fund-deposit/fund-deposit.component';
import { FundWithdrawComponent } from './fund-withdraw/fund-withdraw.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AccountStatementDetailsComponent } from './account-statement-details/account-statement-details.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AccountListComponent } from './account-list/account-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';

const routes: Routes = [
  {path: "deposit", component: FundDepositComponent},
  {path: "transfer", component: FundTransferComponent},
  {path: "withdraw", component: FundWithdrawComponent},
  {path: "statement", component: AccountStatementComponent},
  {path: 'getByAccountNumber/:accountNumber', component: AccountStatementDetailsComponent },
  {path: 'register-customer', component: RegisterCustomerComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'account-list', component: AccountListComponent},
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'delete-account/:accountNumber', component: DeleteAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
