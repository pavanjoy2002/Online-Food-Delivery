package com.pack.ofd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pack.ofd.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{

	Admin findAdminByEmailIdAndPassword(String emailId, String password);

}
