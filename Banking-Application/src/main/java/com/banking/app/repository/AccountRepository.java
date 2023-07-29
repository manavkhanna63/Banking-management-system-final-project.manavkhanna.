package com.banking.app.repository;

import com.banking.app.dto.AccountStatement;
import com.banking.app.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    public AccountStatement getAccountStatementByAccountNumber(Long accountNumber);

}
