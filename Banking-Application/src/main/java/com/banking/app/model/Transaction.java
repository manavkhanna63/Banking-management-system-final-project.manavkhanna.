package com.banking.app.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.util.Optional;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long transactionId;
    private Timestamp transactionDateTime;
    private String transactionType;
    private Long toAccount;
    private Long fromAccount;
    private Long inAccount;
    private int amount;
	public Transaction(Long transactionId, Timestamp transactionDateTime, String transactionType, Long toAccount,
			Long fromAccount, Long inAccount, int amount) {
		super();
		this.transactionId = transactionId;
		this.transactionDateTime = transactionDateTime;
		this.transactionType = transactionType;
		this.toAccount = toAccount;
		this.fromAccount = fromAccount;
		this.inAccount = inAccount;
		this.amount = amount;
	}
	public Transaction() {
		super();
	}
	public Long getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}
	public Timestamp getTransactionDateTime() {
		return transactionDateTime;
	}
	public void setTransactionDateTime(Timestamp transactionDateTime) {
		this.transactionDateTime = transactionDateTime;
	}
	public String getTransactionType() {
		return transactionType;
	}
	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}
	public Long getToAccount() {
		return toAccount;
	}
	public void setToAccount(Long toAccount) {
		this.toAccount = toAccount;
	}
	public Long getFromAccount() {
		return fromAccount;
	}
	public void setFromAccount(Long fromAccount) {
		this.fromAccount = fromAccount;
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
