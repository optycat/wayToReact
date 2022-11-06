"use strict";

const numberOfFilms         = +prompt("How many films have you watched?", "");
      
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for ( let i = 0; i < 2; i++) {
    
    let lastWathedFilm      = prompt("Name one of the last wathced films again", ""),
        lastWatchedFilmMark = +prompt("How it looks on scale 1 to 10?", "");

    if( !lastWathedFilm || lastWathedFilm.length > 49 ){
        i--;
    } else {

        personalMovieDB['movies'][lastWathedFilm] = lastWatchedFilmMark;

        lastWathedFilm      = '';
        lastWatchedFilmMark = 0;
    }

}

if ( personalMovieDB.count <= 10 ) {
    console.log('a few films wathced');
} else if( personalMovieDB.count <= 30 ) {
    console.log('regular viewier');
} else if ( personalMovieDB.count > 30 ) {
    console.log('movie buff');
} else console.log('Error!');

console.log(personalMovieDB.movies);
