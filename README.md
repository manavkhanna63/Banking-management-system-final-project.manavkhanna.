FullStack Baking Application with Spring Boot and Angular
---------------------------------------------------------
This is a fullstack banking app developed using Java, Spring Boot, MySQL, and Angular

This application mimics the dashboard for bank employees. In this application, bank employee can
1. Register the new customer
2. Create the new bank account 
3. Delete the existing account
4. View the list of all customers
5. View the list of all accounts
6. Transfer the fund between different accounts
7. Deposit the fund in the account
8. Withdraw the fund from the account
9. View the account statement of specific account

Backend APIs
------------
1. Register Customer (POST): localhost:8080/customers
2. Create Account (POST): localhost:8080/accounts
3. Delete Account (DELETE) using account number: localhost:8080/accounts/{accountNumber}
4. View Customer List (GET): localhost:8080/customers
5. View Account List (GET): localhost:8080/accounts
6. Transfer Fund from one account to another (POST): localhost:8080/transactions/transfer
7. Deposit Fund in the account (POST): localhost:8080/transactions/deposit
8. Withdraw Fund from the account (POST): localhost:8080/transactions/withdraw
9. View Account Statement using account number (GET): localhost:8080/accounts/{accountNumber}
