package com.banking.app.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FundDepositRequest {
    private Long inAccount;
    private int amount;
	public FundDepositRequest(Long inAccount, int amount) {
		super();
		this.inAccount = inAccount;
		this.amount = amount;
	}
	public FundDepositRequest() {
		super();
	}
	public Long getInAccount() {
		return inAccount;
	}
	public void setInAccount(Long inAccount) {
		this.inAccount = inAccount;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
    
    
}
