package com.pack.ofd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pack.ofd.exception.FoodNotFoundException;
import com.pack.ofd.exception.RestaurantNotFoundException;
import com.pack.ofd.model.Restaurant;
import com.pack.ofd.model.User;
import com.pack.ofd.repository.RestaurantRepository;

@RestController
@CrossOrigin(origins = "http://localhost:1234")
public class RestaurantController {

	@Autowired
	private RestaurantRepository restaurantRepository;
	
	@PostMapping("/resregister")
	Restaurant newRestaurant(@RequestBody Restaurant newRestaurant) {
		return restaurantRepository.save(newRestaurant);
	}

	@GetMapping("/allrestaurants")
	List<Restaurant> getAllRestaurants(){
		return restaurantRepository.findAll();
	}
	
	@DeleteMapping("/delrestaurant/{id}")
	String deleteRestaurant(@PathVariable("id") int id) {
		if(!restaurantRepository.existsById(id)) {
			throw new RestaurantNotFoundException(id);
		}
		restaurantRepository.deleteById(id);
		return "Restaurant with id :  " +id +" has been deleted successfully.";
	}
}
