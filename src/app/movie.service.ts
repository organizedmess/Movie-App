import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  TopMovies = [
    {
      "Title": "They Shall Not Grow Old",
      "Year": 2018,
      "Rated": "R",
      "Released": "01 Feb 2019",
      "Runtime": "99 min",
      "Genre": "Documentary, History, War",
      "Director": "Peter Jackson",
      "Writer": "Peter Jackson",
      "Actors": "Mark Kermode, Peter Jackson",
      "Plot": "A documentary about World War I with never-before-seen footage to commemorate the centennial of the end of the war.",
      "Language": "English",
      "Country": "UK, New Zealand",
      "Awards": "Nominated for 1 BAFTA Film Award. Another 4 wins & 10 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
        },
        {
          "Source": "Metacritic",
          "Value": "91/100"
        }
      ],
      "Metascore": 91,
      "imdbRating": 8.3,
      "imdbVotes": "21,722",
      "imdbID": "tt7905466",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Warner Bros. Pictures",
      "Response": "True"
    },
    {
      "Title": "Midnight Family",
      "Year": 2019,
      "Rated": "N/A",
      "Released": "06 Dec 2019",
      "Runtime": "81 min",
      "Genre": "Documentary, Action, Crime, Drama",
      "Director": "Luke Lorentzen",
      "Writer": "Luke Lorentzen",
      "Actors": "Fer Ochoa, Josue Ochoa, Juan Ochoa",
      "Plot": "In Mexico City's wealthiest neighborhoods, the Ochoa family runs a private ambulance, competing with other for-profit EMTs for patients in need of urgent help.",
      "Language": "Spanish",
      "Country": "Mexico",
      "Awards": "24 wins & 20 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGYyZTk5MjYtNGY2ZS00NzRhLTgwMWMtZjhmMmQ4OGFkNTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
        },
        {
          "Source": "Metacritic",
          "Value": "84/100"
        }
      ],
      "Metascore": 84,
      "imdbRating": 7.7,
      "imdbVotes": 330,
      "imdbID": "tt6010976",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": 1091,
      "Response": "True"
    },
    {
      "Title": "Pain & Gain",
      "Year": 2013,
      "Rated": "R",
      "Released": "26 Apr 2013",
      "Runtime": "129 min",
      "Genre": "Action, Comedy, Crime, Drama",
      "Director": "Michael Bay",
      "Writer": "Christopher Markus (screenplay), Stephen McFeely (screenplay), Pete Collins (based on the magazine articles by)",
      "Actors": "Mark Wahlberg, Dwayne Johnson, Anthony Mackie, Tony Shalhoub",
      "Plot": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
      "Language": "English",
      "Country": "USA",
      "Awards": "4 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NDE5NTU0OV5BMl5BanBnXkFtZTcwMzI1OTMzOQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "50%"
        },
        {
          "Source": "Metacritic",
          "Value": "45/100"
        }
      ],
      "Metascore": 45,
      "imdbRating": 6.4,
      "imdbVotes": "191,388",
      "imdbID": "tt1980209",
      "Type": "movie",
      "DVD": "27 Aug 2013",
      "BoxOffice": "$49,300,000",
      "Production": "Paramount Studios",
      "Response": "True"
    },
    {
      "Title": "The Irishman",
      "Year": 2019,
      "Rated": "R",
      "Released": "27 Nov 2019",
      "Runtime": "209 min",
      "Genre": "Biography, Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Steven Zaillian (screenplay), Charles Brandt (book)",
      "Actors": "Robert De Niro, Al Pacino, Joe Pesci, Harvey Keitel",
      "Plot": "A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa.",
      "Language": "English, Italian, Latin, Spanish",
      "Country": "USA",
      "Awards": "Nominated for 5 Golden Globes. Another 35 wins & 159 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "96%"
        },
        {
          "Source": "Metacritic",
          "Value": "94/100"
        }
      ],
      "Metascore": 94,
      "imdbRating": 8.2,
      "imdbVotes": "144,536",
      "imdbID": "tt1302006",
      "Type": "movie",
      "DVD": "27 Nov 2019",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Response": "True"
    },
    {
      "Title": "Once Upon a Time... in Hollywood",
      "Year": 2019,
      "Rated": "R",
      "Released": "26 Jul 2019",
      "Runtime": "161 min",
      "Genre": "Comedy, Drama",
      "Director": "Quentin Tarantino",
      "Writer": "Quentin Tarantino",
      "Actors": "Leonardo DiCaprio, Brad Pitt, Margot Robbie, Emile Hirsch",
      "Plot": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      "Language": "English, Italian, Spanish",
      "Country": "USA, UK, China",
      "Awards": "Won 3 Golden Globes. Another 70 wins & 242 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "85%"
        },
        {
          "Source": "Metacritic",
          "Value": "83/100"
        }
      ],
      "Metascore": 83,
      "imdbRating": 7.8,
      "imdbVotes": "318,841",
      "imdbID": "tt7131622",
      "Type": "movie",
      "DVD": "22 Nov 2019",
      "BoxOffice": "N/A",
      "Production": "Columbia Pictures",
      "Response": "True"
    },
    {
      "Title": "Marriage Story",
      "Year": 2019,
      "Rated": "R",
      "Released": "06 Dec 2019",
      "Runtime": "137 min",
      "Genre": "Comedy, Drama, Romance",
      "Director": "Noah Baumbach",
      "Writer": "Noah Baumbach",
      "Actors": "Adam Driver, Scarlett Johansson, Julia Greer, Azhy Robertson",
      "Plot": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
      "Language": "English",
      "Country": "UK, USA",
      "Awards": "Won 1 Golden Globe. Another 86 wins & 212 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "95%"
        },
        {
          "Source": "Metacritic",
          "Value": "93/100"
        }
      ],
      "Metascore": 93,
      "imdbRating": 8.1,
      "imdbVotes": "108,524",
      "imdbID": "tt7653254",
      "Type": "movie",
      "DVD": "06 Dec 2019",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Response": "True"
    }
  ];

  movies: any[] = [];

  constructor(private http: HttpClient) {
    this.GetMovies().subscribe((data) => {
      this.movies = data.movies;
    });
  }

  GetMovies(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-rapidAPI-Key': 'fcd93fc9bdmsh8dca46667993cf6p1c8c34jsna62e27604406',
      'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com',
    });

    return this.http.get<any>(
      'https://moviesverse1.p.rapidapi.com/top-250-movies',
      { headers: headers }
    );
  }



}
