package com.banking.app.controller;

import com.banking.app.model.Transaction;
import com.banking.app.request.FundDepositRequest;
import com.banking.app.request.FundTransferRequest;
import com.banking.app.request.FundWithdrawRequest;
import com.banking.app.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @GetMapping("/transactions")
    public List<Transaction> getAllTransactions(){
        return transactionService.getAllTransactions();
    }

    @PostMapping("/transactions/transfer")
    public Transaction transferFund(@RequestBody FundTransferRequest fundTransferRequest){
        return transactionService.transferFund(fundTransferRequest);
    }

    @PostMapping("/transactions/deposit")
    public Transaction depositFund(@RequestBody FundDepositRequest fundDepositRequest){
        return transactionService.depositFund(fundDepositRequest);
    }

    @PostMapping("/transactions/withdraw")
    public Transaction withdrawFund(@RequestBody FundWithdrawRequest fundWithdrawRequest){
        return transactionService.withdrawFund(fundWithdrawRequest);
    }

    @GetMapping("/transactions/{accountNumber}")
    public List<Transaction> withdrawFund(@PathVariable Long accountNumber){
        return transactionService.findTransactionsByAccountNumber(accountNumber);
    }
}
