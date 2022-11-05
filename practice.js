"use strict";

const numberOfFilms         = +prompt("How many films have you watched?", "");
let   lastWathedFilm        = prompt("Name one of the last wathed films", ""),
      lastWatchedFilmMark   = +prompt("How it looks on scale 1 to 10?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB['movies'][lastWathedFilm] = lastWatchedFilmMark;

lastWathedFilm      = prompt("Name one of the last wathed films", "");
lastWatchedFilmMark = +prompt("How it looks on scale 1 to 10?", "");

personalMovieDB['movies'][lastWathedFilm] = lastWatchedFilmMark;

console.log(personalMovieDB.movies);
