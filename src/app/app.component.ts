import { Component } from '@angular/core';
import { Iperson, Iperson2 } from './shared/models/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I Love Angular from TS file !!!';


  // lists Items
  skills : Array<string> = ["JS", "TS", "Angular", "Node"];

  fullstackdev : Array<string> = ["HTML", "CSS", "JavaScript", "Express.JS", "MongoDB"];

  DataSciAIskill : Array<string> = ["Python", "TensorFlow", "Pandas", "Numpy", "Scikit-Learn"];

  Cybersecurityskill : Array<string> = ["Ethical Hacking", "Network Security", "Cryptography", "Penetration Testing"];

  DevOpsCloudSkill : Array<string> = ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"];


  // Table Items

  persons : Array<Iperson>= [
    {
      fname : "Harsh",
      lname : "Pal",
      email : "hp@gmail.com",
      contact : 8452259597
    },
    {
      fname : "Yash",
      lname : "Gangwani",
      email : "yg@gmail.com",
      contact : 3264594975
    },
    {
      fname : "Sanket",
      lname : "Dudhe",
      email : "sd@gmail.com",
      contact : 9845149466
    },
    {
      fname : "Vishal",
      lname : "Wadhai",
      email : "vw@gmail.com",
      contact : 4849190645
    },
    
  ]

  persons2 : Array<Iperson>= [
    {
      fname : "Jhon",
      lname : "Doe",
      email : "jd@gmail.com",
      contact : 8452259597
    },
    {
      fname : "June",
      lname : "Doe",
      email : "june@gmail.com",
      contact : 3264594975
    },
    {
      fname : "May",
      lname : "Doe",
      email : "may@gmail.com",
      contact : 9845149466
    },
    {
      fname : "Jane",
      lname : "Doe",
      email : "jane@gmail.com",
      contact : 4849190645
    },
    
  ]

  persons3 : Array<Iperson>= [
    {
      fname : "Viny",
      lname : "Bheri",
      email : "vb@gmail.com",
      contact : 8452259597
    },
    {
      fname : "Abhi",
      lname : "Hulk",
      email : "ah@gmail.com",
      contact : 3264594975
    },
    {
      fname : "Daya",
      lname : "Niks",
      email : "dn@gmail.com",
      contact : 9845149466
    },
    {
      fname : "Gong",
      lname : "Abbh",
      email : "ga@gmail.com",
      contact : 4849190645
    },
    
  ]

  employe : Array<Iperson2>= [
    {
      empname : "Suresh",
      department : "HR",
      salary : 500000,
      empid : 1
    },
    {
      empname : "Ramesh",
      department : "IT",
      salary : 700000,
      empid : 4
    },
    {
      empname : "Geeta",
      department : "Finance",
      salary : 600000,
      empid : 7
    },
    {
      empname : "Pooja",
      department : "Marketing",
      salary : 550000,
      empid : 5
    },
    
  ]

  employe2 : Array<Iperson2>= [
    {
      empname : "Anil",
      department : "Management",
      salary : 800000,
      empid : 2
    },
    {
      empname : "Akash",
      department : "Construction",
      salary : 750000,
      empid : 6
    },
    {
      empname : "Bhuwan",
      department : "Site Engineer",
      salary : 900000,
      empid : 9
    },
    {
      empname : "Nikhil",
      department : "HR Manager",
      salary : 1000000,
      empid : 5
    },
    
  ]


}




