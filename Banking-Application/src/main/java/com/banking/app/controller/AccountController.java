package com.banking.app.controller;

import com.banking.app.dto.AccountStatement;
import com.banking.app.model.Account;
import com.banking.app.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {
    @Autowired
    AccountService accountService;

    @PostMapping("/accounts")
    public Account createAccount(@RequestBody Account account){
        return accountService.createAccount(account);
    }

    @GetMapping("/accounts")
    public List<Account> getAccounts(){
        return accountService.getAccounts();
    }
    @GetMapping("/accounts/{accountNumber}")
    public Account getAccountByAccountNumber(@PathVariable Long accountNumber){
        return accountService.getAccountByAccountNumber(accountNumber);
    }

    @GetMapping("/transactions/statement/{accountNumber}")
    public AccountStatement getAccountStatementByAccountNumber(@PathVariable Long accountNumber) {
        return accountService.getAccountStatementByAccountNumber(accountNumber);
    }

    @DeleteMapping("/accounts/{accountNumber}")
    public void deleteAccountByAccountNumber(@PathVariable Long accountNumber){
        accountService.deleteAccountByAccountNumber(accountNumber);
    }
}
