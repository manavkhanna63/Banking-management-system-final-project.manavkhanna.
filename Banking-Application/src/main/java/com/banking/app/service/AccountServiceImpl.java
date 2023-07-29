package com.banking.app.service;
import com.banking.app.dto.AccountStatement;
import com.banking.app.model.Account;
import com.banking.app.repository.AccountRepository;
import com.banking.app.repository.CustomerRepository;
import com.banking.app.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    AccountRepository accountRepository;
    @Autowired
    TransactionRepository transactionRepository;
    @Autowired
    TransactionService transactionService;
    @Autowired
    CustomerRepository customerRepository;


    @Override
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Long accountNumber, Account account) {
        return null;
    }

    @Override
    public void deleteAccount(Long accountNumber) {
        accountRepository.deleteById(accountNumber);
    }

    @Override
    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }

    @Override
    public Account getAccountByAccountNumber(Long accountNumber) {
        return accountRepository.findById(accountNumber).get();
    }

    @Override
    public AccountStatement getAccountStatementByAccountNumber(Long accountNumber) {
        Account account = accountRepository.findById(accountNumber).get();
        return new AccountStatement(account.getAccountBalance(), account.getCustomer().getName(), transactionService.findTransactionsByAccountNumber(accountNumber));
    }

    @Override
    public void deleteAccountByAccountNumber(Long accountNumber) {
        accountRepository.deleteById(accountNumber);
    }
}
