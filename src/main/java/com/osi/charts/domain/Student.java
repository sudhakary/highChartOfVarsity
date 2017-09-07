package com.osi.charts.domain;

import java.util.List;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Student")
@Component
public class Student {

@Id
 String id;
 String name;
 @NotEmpty
 Integer rollNumber;
 List<Integer> marks;
 @NotEmpty
 Campus campus;
 List<Subject> subjects;
 
}
