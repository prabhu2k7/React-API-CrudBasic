package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name = "users")
public class User {

	private long id;
	private String name;
	private String cardNumber;
	private String limitVal;
	
	public User() {
		
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", cardNumber=" + cardNumber + ", limitVal=" + limitVal + "]";
	}


	public User(String name, String cardNumber, String limitVal) {
		this.name = name;
		this.cardNumber = cardNumber;
		this.limitVal = limitVal;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "cardnumber", nullable = false)
	public String getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	
	@Column(name = "Limited", nullable = false)
	public String getLimitVal() {
		return limitVal;
	}
	public void setLimitVal(String limitVal) {
		this.limitVal = limitVal;
	}

	
	
}
