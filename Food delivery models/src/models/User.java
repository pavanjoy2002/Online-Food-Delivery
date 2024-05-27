package models;


public class User {
	
	private int userId;
	private String userName;
	private String email;
	private long phoneNum;
	private String password;
	private String registrationMethod;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhoneNum() {
		return phoneNum;
	}
	public void setPhoneNum(long phoneNum) {
		this.phoneNum = phoneNum;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRegistrationMethod() {
		return registrationMethod;
	}
	public void setRegistrationMethod(String registrationMethod) {
		this.registrationMethod = registrationMethod;
	}
	
}
