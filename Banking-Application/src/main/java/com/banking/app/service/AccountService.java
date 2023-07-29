package com.banking.app.service;

import com.banking.app.dto.AccountStatement;
import com.banking.app.model.Account;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AccountService {
    public Account createAccount(Account account);
    public Account updateAccount(Long accountNumber, Account account);
    public void deleteAccount(Long accountNumber);
    public List<Account> getAccounts();
    public Account getAccountByAccountNumber(Long accountNumber);
    public AccountStatement getAccountStatementByAccountNumber(Long accountNumber);
    public void deleteAccountByAccountNumber(Long accountNumber);
}
