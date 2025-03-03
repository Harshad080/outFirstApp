import { Component } from '@angular/core';
import { cricketers, intrcricketers, } from './shared/models/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I Love Angular from TS file !!!';



  cricket : Array<cricketers> = [
   
      // Indian Cricketers
      {
        name: "Sachin Tendulkar",
        country: "India",
        odiDebut: "18 December 1989",
        matches: 463,
        runs: 18426,
        highestScore: 200,
        centuries: 49,
        fifties: 96,
        battingAverage: 44.83,
        wickets: 154
      },
      {
        name: "Virat Kohli",
        country: "India",
        odiDebut: "18 August 2008",
        matches: 292,
        runs: 13848,
        highestScore: 183,
        centuries: 50,
        fifties: 72,
        battingAverage: 58.67,
        wickets: 4
      },
      {
        name: "MS Dhoni",
        country: "India",
        odiDebut: "23 December 2004",
        matches: 350,
        runs: 10773,
        highestScore: 183,
        centuries: 10,
        fifties: 73,
        battingAverage: 50.57,
        wickets: 1
      },
      {
        name: "Rohit Sharma",
        country: "India",
        odiDebut: "23 June 2007",
        matches: 262,
        runs: 10709,
        highestScore: 264,
        centuries: 31,
        fifties: 55,
        battingAverage: 49.1,
        wickets: 10
      },
      {
        name: "Yuvraj Singh",
        country: "India",
        odiDebut: "3 October 2000",
        matches: 304,
        runs: 8701,
        highestScore: 150,
        centuries: 14,
        fifties: 52,
        battingAverage: 36.56,
        wickets: 111
      },
      {
        name: "Sourav Ganguly",
        country: "India",
        odiDebut: "11 January 1992",
        matches: 311,
        runs: 11363,
        highestScore: 183,
        centuries: 22,
        fifties: 72,
        battingAverage: 41.02,
        wickets: 100
      },
      {
        name: "Kapil Dev",
        country: "India",
        odiDebut: "1 October 1978",
        matches: 225,
        runs: 3783,
        highestScore: 175,
        centuries: 1,
        fifties: 14,
        battingAverage: 23.79,
        wickets: 253
      },
      {
        name: "Rahul Dravid",
        country: "India",
        odiDebut: "3 April 1996",
        matches: 344,
        runs: 10889,
        highestScore: 153,
        centuries: 12,
        fifties: 83,
        battingAverage: 39.16,
        wickets: 4
      },
      {
        name: "Virender Sehwag",
        country: "India",
        odiDebut: "1 April 1999",
        matches: 251,
        runs: 8273,
        highestScore: 219,
        centuries: 15,
        fifties: 38,
        battingAverage: 35.05,
        wickets: 96
      },
      {
        name: "Jasprit Bumrah",
        country: "India",
        odiDebut: "23 January 2016",
        matches: 87,
        runs: 58,
        highestScore: 16,
        battingAverage: 5.8,
        wickets: 149
      },
    ]
      intrcricket : Array<intrcricketers> = [
      // International Cricketers
      {
        name: "Ricky Ponting",
        country: "Australia",
        odiDebut: "15 February 1995",
        matches: 375,
        runs: 13704,
        highestScore: 164,
        centuries: 30,
        fifties: 82,
        battingAverage: 42.03,
        wickets: 3
      },
      {
        name: "AB de Villiers",
        country: "South Africa",
        odiDebut: "2 February 2005",
        matches: 228,
        runs: 9577,
        highestScore: 176,
        centuries: 25,
        fifties: 53,
        battingAverage: 53.50,
        wickets: 7
      },
      {
        name: "Jacques Kallis",
        country: "South Africa",
        odiDebut: "9 January 1996",
        matches: 328,
        runs: 11579,
        highestScore: 139,
        centuries: 17,
        fifties: 86,
        battingAverage: 44.36,
        wickets: 273
      },
      {
        name: "Chris Gayle",
        country: "West Indies",
        odiDebut: "11 September 1999",
        matches: 301,
        runs: 10480,
        highestScore: 215,
        centuries: 25,
        fifties: 54,
        battingAverage: 37.83,
        wickets: 167
      },
      {
        name: "Muttiah Muralitharan",
        country: "Sri Lanka",
        odiDebut: "12 August 1993",
        matches: 350,
        runs: 674,
        highestScore: 33,
        battingAverage: 6.93,
        wickets: 534
      },
      {
        name: "Wasim Akram",
        country: "Pakistan",
        odiDebut: "23 November 1984",
        matches: 356,
        runs: 3717,
        highestScore: 86,
        battingAverage: 16.52,
        wickets: 502
      },
      {
        name: "Brian Lara",
        country: "West Indies",
        odiDebut: "9 November 1990",
        matches: 299,
        runs: 10405,
        highestScore: 169,
        centuries: 19,
        fifties: 63,
        battingAverage: 40.48,
        wickets: 4
      },
      {
        name: "Kane Williamson",
        country: "New Zealand",
        odiDebut: "10 August 2010",
        matches: 161,
        runs: 6932,
        highestScore: 148,
        centuries: 13,
        fifties: 42,
        battingAverage: 47.60,
        wickets: 37
      },
      {
        name: "Ben Stokes",
        country: "England",
        odiDebut: "25 August 2011",
        matches: 122,
        runs: 3491,
        highestScore: 182,
        centuries: 5,
        fifties: 22,
        battingAverage: 40.47,
        wickets: 74
      },
      {
        name: "Shaun Pollock",
        country: "South Africa",
        odiDebut: "9 January 1996",
        matches: 303,
        runs: 3519,
        highestScore: 130,
        battingAverage: 26.45,
        wickets: 393
      }
    ];
    
  
    // Users : Array<users> = [
    //   { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    //   { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    //   { id: 3, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
    //   { id: 4, name: 'Bob White', email: 'bob@example.com', role: 'User' },
    //   { id: 5, name: 'Charlie Green', email: 'charlie@example.com', role: 'Admin' }
    // ];

    // Products : Array<product> = [
    //   { id: 101, name: 'Laptop', price: 999, category: 'Electronics' },
    //   { id: 102, name: 'Phone', price: 699, category: 'Electronics' },
    //   { id: 103, name: 'Shoes', price: 89, category: 'Fashion' },
    //   { id: 104, name: 'Watch', price: 150, category: 'Accessories' },
    //   { id: 105, name: 'Backpack', price: 50, category: 'Travel' }
    // ];
    


}



