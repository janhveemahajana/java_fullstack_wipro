package com.wipro.subjectproducer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.subjectproducer.dto.Subject;
import com.wipro.subjectproducer.service.SubjectProducerService;

@RestController
@RequestMapping("/subject")
public class SubjectProducerController {
	@Autowired
	SubjectProducerService subjectProducerService;
	//ex2
//	@PostMapping
//	void sendSubjectData(@RequestParam String subjectCode, @RequestParam String subjectMessage)
//	{
//		subjectProducerService.sendSubjectData(subjectCode, subjectMessage);
//	}
	
	//ex3
	
	@PostMapping
	void sendSubjectData(@RequestBody Subject subject)
	{
		subjectProducerService.sendSubjectData(subject);
	}
}
