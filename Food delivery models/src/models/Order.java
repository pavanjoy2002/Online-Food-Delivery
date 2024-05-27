package models;

import java.time.LocalDateTime;

public class Order {
	
	private int id;
	private int userId;
	private int restaurantId;
	private double totalAmount;
	private String status;
	private LocalDateTime deliveryTime;
	
	public int getId() {
		return id;
	}
	public int getUserId() {
		return userId;
	}
	public int getRestaurantId() {
		return restaurantId;
	}
	public double getTotalAmount() {
		return totalAmount;
	}
	public String getStatus() {
		return status;
	}
	public LocalDateTime getDeliveryTime() {
		return deliveryTime;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setDeliveryTime(LocalDateTime deliveryTime) {
		this.deliveryTime = deliveryTime;
	} 
	
	
}
