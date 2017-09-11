package com.osi.charts.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.osi.charts.domain.Campus;
import com.osi.charts.domain.Student;

@Repository
public interface StudentRepository extends MongoRepository<Campus, String>{
	//Student findByCampus(String campus);

}
