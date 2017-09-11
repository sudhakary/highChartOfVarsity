package com.osi.charts.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.osi.charts.domain.Campus;
import com.osi.charts.domain.Student;
import com.osi.charts.repository.StudentRepository;

@Service
public class StudentServiceImpl implements IStudentService
{
	@Autowired
	StudentRepository studentRepository;
	
	@Autowired
	private MongoTemplate mongoTemplate;

	public Student createStudent(Student student) {
		return null;
	}

	public List<Campus> getCampusDetails(List<String> campus) {
		List<Campus> listOfCampus = new ArrayList<Campus>();
		for(String stdCampus : campus){
			Query query = new Query();
			query.addCriteria(Criteria.where("name").is(stdCampus));
			Campus campusData = mongoTemplate.findOne(query, Campus.class);
			listOfCampus.add(campusData);
		}
		return listOfCampus;
	}

}
