package com.banking.app.service;

import com.banking.app.model.Transaction;
import com.banking.app.request.FundDepositRequest;
import com.banking.app.request.FundTransferRequest;
import com.banking.app.request.FundWithdrawRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TransactionService {
    public List<Transaction> getAllTransactions();
    public Transaction transferFund(FundTransferRequest fundTransferRequest);
    public Transaction depositFund(FundDepositRequest fundDepositRequest);
    public Transaction withdrawFund(FundWithdrawRequest fundWithdrawRequest);
    public List<Transaction> findTransactionsByAccountNumber(Long accountNumber);

}
