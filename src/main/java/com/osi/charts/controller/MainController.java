package com.osi.charts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.osi.charts.domain.Campus;
import com.osi.charts.domain.Student;
import com.osi.charts.service.IStudentService;


@RestController
@RequestMapping("/student")
public class MainController {
	
	@Autowired
	IStudentService iStudentService;
	
   @PostMapping
	public ResponseEntity<?> createStudentDetails(@RequestBody Student student){
		iStudentService.createStudent(student);
		return new ResponseEntity<>("Student details saved successfully",HttpStatus.CREATED);
	}

   @GetMapping("/campus/{campus}")
   public ResponseEntity<List<Campus>> getStudentByCampus(@PathVariable List<String> campus){
	   List<Campus> campusdata = iStudentService.getCampusDetails(campus);
		return new ResponseEntity<List<Campus>>(campusdata, HttpStatus.OK);
}
}
