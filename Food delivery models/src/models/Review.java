package models;

public class Review {

	private int id;
	private int userId;
	private int restuarantId;
	private double rating;
	private String comment;
	
	public int getId() {
		return id;
	}
	public int getUserId() {
		return userId;
	}
	public int getRestuarantId() {
		return restuarantId;
	}
	public double getRating() {
		return rating;
	}
	public String getComment() {
		return comment;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public void setRestuarantId(int restuarantId) {
		this.restuarantId = restuarantId;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	
}