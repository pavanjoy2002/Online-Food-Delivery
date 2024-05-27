package models;

public class Menu {

	private int id;
	private int restaurantId;
	private String name;
	private String description;
	private double price;
	
	public int getId() {
		return id;
	}
	public int getRestaurantId() {
		return restaurantId;
	}
	public String getName() {
		return name;
	}
	public String getDescription() {
		return description;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	
	
}
