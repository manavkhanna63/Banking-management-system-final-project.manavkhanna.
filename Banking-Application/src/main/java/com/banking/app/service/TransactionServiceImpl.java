package com.banking.app.service;

import com.banking.app.model.Account;
import com.banking.app.model.Customer;
import com.banking.app.model.Transaction;
import com.banking.app.repository.AccountRepository;
import com.banking.app.repository.CustomerRepository;
import com.banking.app.repository.TransactionRepository;
import com.banking.app.request.FundDepositRequest;
import com.banking.app.request.FundTransferRequest;
import com.banking.app.request.FundWithdrawRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {
    @Autowired
    TransactionRepository transactionRepository;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    CustomerRepository customerRepository;
    public List<Transaction> getAllTransactions(){
        return transactionRepository.findAll();
    }

    @Override
    public Transaction transferFund(FundTransferRequest fundTransferRequest) {
        Long fromAccountNumber = fundTransferRequest.getFromAccount();
        Long toAccountNumber = fundTransferRequest.getToAccount();
        int amount = fundTransferRequest.getAmount();
        Account fromAccount = accountRepository.findById(fromAccountNumber).get();
        Account toAccount = accountRepository.findById(toAccountNumber).get();

        if(accountRepository.findById(fromAccountNumber).isPresent()
                && accountRepository.findById(toAccountNumber).isPresent()){
            int transferAmount = fundTransferRequest.getAmount();
            fromAccount.setAccountBalance(fromAccount.getAccountBalance() - transferAmount);
            toAccount.setAccountBalance(toAccount.getAccountBalance() + transferAmount);

            accountRepository.save(fromAccount);
            accountRepository.save(toAccount);

            Transaction transaction = transactionRepository.save(new Transaction(0L,
                    new Timestamp(System.currentTimeMillis()),
                    "Transfer" , toAccountNumber, fromAccountNumber,
                    null, amount));

            return transaction;
        }
        return null;
    }

    @Override
    public Transaction depositFund(FundDepositRequest fundDepositRequest) {
        Long inAccountNumber = fundDepositRequest.getInAccount();
        int amount = fundDepositRequest.getAmount();

        Account inAccount = accountRepository.findById(inAccountNumber).get();

        if (accountRepository.findById(inAccountNumber).isPresent()) {
            int depositAmount = fundDepositRequest.getAmount();
            inAccount.setAccountBalance(inAccount.getAccountBalance() + depositAmount);

            accountRepository.save(inAccount);

            Transaction transaction = transactionRepository.save(new Transaction(0L, new Timestamp(System.currentTimeMillis()),
                    "Deposit", null, null, inAccountNumber, amount));
            return transaction;
        }
        return null;
    }

    @Override
    public Transaction withdrawFund(FundWithdrawRequest fundWithdrawRequest) {
        Long fromAccountNumber = fundWithdrawRequest.getFromAccount();
        int amount = fundWithdrawRequest.getAmount();

        Account fromAccount = accountRepository.findById(fromAccountNumber).get();

        if (accountRepository.findById(fromAccountNumber).isPresent()){
            int withdrawAmount = fundWithdrawRequest.getAmount();
            fromAccount.setAccountBalance(fromAccount.getAccountBalance() - withdrawAmount);
            accountRepository.save(fromAccount);

            Transaction transaction = transactionRepository.save(new Transaction(0L, new Timestamp(System.currentTimeMillis()),
                    "Withdrawal", null, fromAccountNumber, null, amount));
            return transaction;
        }
        return null;
    }

    @Override
    public List<Transaction> findTransactionsByAccountNumber(Long accountNumber) {
        List<Transaction> transactions = new ArrayList<Transaction>();
        transactions = transactionRepository.findAll().stream().filter(n -> n.getInAccount() == accountNumber || n.getToAccount() == accountNumber || n.getFromAccount() == accountNumber).collect(Collectors.toList());
        return transactions;
    }


}
