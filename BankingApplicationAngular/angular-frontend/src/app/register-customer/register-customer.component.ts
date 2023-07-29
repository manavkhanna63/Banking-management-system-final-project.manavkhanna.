import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent {

  customer: Customer = new Customer();
  customers: Customer[] = [];

  constructor(private service: CustomerService, private router: Router){}

  registerCustomer(){
    this.service.registerCustomer(this.customer).subscribe(data => {
      this.customer = new Customer();
    });
    this.router.navigate(['/customer-list']);
  }
}


