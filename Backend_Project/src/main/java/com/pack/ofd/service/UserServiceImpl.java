package com.pack.ofd.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pack.ofd.model.Admin;
import com.pack.ofd.model.DeliveryPerson;
import com.pack.ofd.model.Restaurant;
import com.pack.ofd.model.User;
import com.pack.ofd.repository.AdminRepository;
import com.pack.ofd.repository.DeliveryPersonRepository;
import com.pack.ofd.repository.RestaurantRepository;
import com.pack.ofd.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private DeliveryPersonRepository deliveryPersonRepository;

    @Override
    public User login(String userType, String email, String password) throws Exception {
        User user = null;
        switch (userType) {
            case "admin":
                user = convertAdminToUser(adminRepository.findAdminByEmailIdAndPassword(email, password));
                break;
            case "restaurant":
                user = convertRestaurantToUser(restaurantRepository.findRestaurantByEmailIdAndPassword(email, password));
                break;
            case "delivery":
                user = convertDeliveryPersonToUser(deliveryPersonRepository.findDeliveryPersonByEmailIdAndPassword(email, password));
                break;
            case "user":
                user = userRepository.findByEmailIdAndPassword(email, password);
                break;
            default:
                throw new Exception("Invalid user type");
        }
        if (user == null) {
            throw new Exception("User not found or invalid credentials");
        }
        return user;
    }

    // Convert Admin to User
    private User convertAdminToUser(Admin admin) {
        if (admin == null) {
            return null;
        }
        User user = new User();
        user.setUserId(admin.getAdminId()); // Example mapping
        user.setEmailId(admin.getEmailId());
        // Set other fields as needed
        return user;
    }

    // Convert Restaurant to User
    private User convertRestaurantToUser(Restaurant restaurant) {
        if (restaurant == null) {
            return null;
        }
        User user = new User();
        user.setUserId(restaurant.getRestaurantId()); // Example mapping
        user.setEmailId(restaurant.getEmailId());
        // Set other fields as needed
        return user;
    }

    // Convert DeliveryPerson to User
    private User convertDeliveryPersonToUser(DeliveryPerson deliveryPerson) {
        if (deliveryPerson == null) {
            return null;
        }
        User user = new User();
        user.setUserId(deliveryPerson.getDeliveryPersonId()); // Example mapping
        user.setEmailId(deliveryPerson.getEmailId());
        // Set other fields as needed
        return user;
    }
}

