package com.banking.app.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FundWithdrawRequest {
    private Long fromAccount;
    private int amount;
    
    
	public FundWithdrawRequest() {
		super();
	}
	public FundWithdrawRequest(Long fromAccount, int amount) {
		super();
		this.fromAccount = fromAccount;
		this.amount = amount;
	}
	public Long getFromAccount() {
		return fromAccount;
	}
	public void setFromAccount(Long fromAccount) {
		this.fromAccount = fromAccount;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
    
    

}
