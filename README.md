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

UI Screenshots
--------------

![1](https://user-images.githubusercontent.com/107140001/235326551-c2170095-e5ff-4898-8113-c50dbb16c994.png)
![2](https://user-images.githubusercontent.com/107140001/235326552-71981f22-c09e-4895-9e15-40d5500a038b.png)
![3](https://user-images.githubusercontent.com/107140001/235326554-3cf1f864-495c-4f9e-9ebc-da8aabe64c87.png)
![4](https://user-images.githubusercontent.com/107140001/235326557-e8344bfb-f304-4fd5-8b1e-bb180d310549.png)
![5](https://user-images.githubusercontent.com/107140001/235326558-390da964-f3db-4809-a13f-c3e20a36bcc4.png)
![6](https://user-images.githubusercontent.com/107140001/235326559-5b5e218e-4010-43bf-af90-911292372e4f.png)
![7](https://user-images.githubusercontent.com/107140001/235326561-4db0ce34-8d82-4be5-ab72-5025b296dfa8.png)
![8](https://user-images.githubusercontent.com/107140001/235326562-241d88a9-91e1-4a9b-914b-e561769af968.png)
![9](https://user-images.githubusercontent.com/107140001/235326648-db8226ce-6f0a-42cb-860b-5fadb4ce742e.png)
