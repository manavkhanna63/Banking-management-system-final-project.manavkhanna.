import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer = new Customer();
  customers: Customer[] = [];

  constructor(private service: CustomerService){}

  getCustomerList(){
    return this.service.getCustomerList().subscribe(data => {
      this.customers = data;
    });
  }

  ngOnInit(){
    this.getCustomerList();
  }

}
