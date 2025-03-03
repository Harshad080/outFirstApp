import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  employees = [
    { id: 201, name: 'Sam Wilson', department: 'HR', salary: 60000 },
    { id: 202, name: 'Diana Prince', department: 'Finance', salary: 75000 },
    { id: 203, name: 'Bruce Wayne', department: 'IT', salary: 90000 },
    { id: 204, name: 'Clark Kent', department: 'Marketing', salary: 65000 },
    { id: 205, name: 'Peter Parker', department: 'Sales', salary: 55000 }
  ];


  Users  = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
    { id: 4, name: 'Bob White', email: 'bob@example.com', role: 'User' },
    { id: 5, name: 'Charlie Green', email: 'charlie@example.com', role: 'Admin' }
  ];

  Products  = [
    { id: 101, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 102, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 103, name: 'Shoes', price: 89, category: 'Fashion' },
    { id: 104, name: 'Watch', price: 150, category: 'Accessories' },
    { id: 105, name: 'Backpack', price: 50, category: 'Travel' }
  ];


  books = [
    { id: 301, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 302, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 303, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 304, title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
    { id: 305, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
  ];

  students = [
    { id: 401, name: 'Emma Johnson', grade: 'A', age: 16 },
    { id: 402, name: 'Liam Brown', grade: 'B', age: 17 },
    { id: 403, name: 'Olivia Davis', grade: 'A', age: 15 },
    { id: 404, name: 'Noah Wilson', grade: 'C', age: 16 },
    { id: 405, name: 'Ava Martinez', grade: 'B', age: 17 }
  ];
  
  
}
