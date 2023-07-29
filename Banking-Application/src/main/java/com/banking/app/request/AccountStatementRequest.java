package com.banking.app.request;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountStatementRequest {
    private Long accountNumber;

	public AccountStatementRequest(Long accountNumber) {
		super();
		this.accountNumber = accountNumber;
	}

	public AccountStatementRequest() {
		super();
	}

	public Long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(Long accountNumber) {
		this.accountNumber = accountNumber;
	}
    
    

}
