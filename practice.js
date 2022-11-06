"use strict";

let numberOfFilms = +prompt("How many films have you watched?", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};


function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you watched?", "");
    }
}

const writeYourGenre = () => {
    let tmpGenreCount = 0;

    while(tmpGenreCount < 3) {
        let tmpGenre = prompt(`Enter your fawourite genre number ${tmpGenreCount + 1}:`, "");
        personalMovieDB.genres[tmpGenreCount] = tmpGenre;
        tmpGenreCount++;

        if(!tmpGenre) {
            if(tmpGenreCount == 0) {
                tmpGenreCount++;
            }
            tmpGenreCount--;
        }
    }
}

function rememberFilm() {
    for ( let i = 0; i < 2; i++) {
    
        let lastWathedFilm      = prompt("Name one of the last wathced films", ""),
            lastWatchedFilmMark = +prompt("How it looks on scale 1 to 10?", "");
    
        if( !lastWathedFilm || lastWathedFilm.length > 49 ){
            i--;
        } else {
            personalMovieDB['movies'][lastWathedFilm] = lastWatchedFilmMark;
    
            lastWathedFilm      = '';
            lastWatchedFilmMark = 0;
        }
    
    }
}

function detectPersonalLvl() {
    if ( personalMovieDB.count <= 10 ) {
        console.log('a few films wathced');
    } else if( personalMovieDB.count <= 30 ) {
        console.log('regular viewier');
    } else if ( personalMovieDB.count > 30 ) {
        console.log('movie buff');
    } else console.log('Error!');
}

const showMyDB = (acsesToDB) => {
    if(acsesToDB == true) {
        console.log(personalMovieDB);
    }
};


start();

rememberFilm();
detectPersonalLvl();
writeYourGenre();
showMyDB(personalMovieDB.private);
