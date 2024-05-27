package models;

public class OrderItem {
	
	private int id;
	private int orderId;
	private int menuId;
	private int quantity;
	
	public int getId() {
		return id;
	}
	public int getOrderId() {
		return orderId;
	}
	public int getMenuId() {
		return menuId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
}