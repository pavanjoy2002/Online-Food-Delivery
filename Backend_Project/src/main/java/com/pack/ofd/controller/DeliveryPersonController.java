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
import com.pack.ofd.model.DeliveryPerson;
import com.pack.ofd.model.User;
import com.pack.ofd.repository.DeliveryPersonRepository;

@RestController
@CrossOrigin(origins = "http://localhost:1234")
public class DeliveryPersonController {

	@Autowired
	private DeliveryPersonRepository deliveryPersonRepository;
	
	@PostMapping("/adddeliveryperson")
	DeliveryPerson newDeliveryPerson(@RequestBody DeliveryPerson newDeliveryPerson) {
		return deliveryPersonRepository.save(newDeliveryPerson);
	}

	@GetMapping("/alldeliverypersons")
	List<DeliveryPerson> getAllDeliveryPerson(){
		return deliveryPersonRepository.findAll();
	}
	
	@DeleteMapping("/deldeliveryperson/{id}")
	String deleteDeliveryPerson(@PathVariable("id") int id) {
		if(!deliveryPersonRepository.existsById(id)) {
			throw new FoodNotFoundException(id);
		}
		deliveryPersonRepository.deleteById(id);
		return "Delivery person with id :  " +id +" has been deleted successfully.";
	}
}
