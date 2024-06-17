package com.pack.ofd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pack.ofd.model.DeliveryPerson;

public interface DeliveryPersonRepository extends JpaRepository<DeliveryPerson, Integer>{

	DeliveryPerson findDeliveryPersonByEmailIdAndPassword(String emailId, String password);	

}
