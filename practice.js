"use strict";

let numberOfFilms = +prompt("How many films have you watched?", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
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
    if(acsesToDB == false) {
        console.log(personalMovieDB);
    }
};


start();

rememberFilm();
detectPersonalLvl();
writeYourGenre();
showMyDB(personalMovieDB.private);



// some shablones

/*
function getCoupe(place) {
    let result;
    if(!place || typeof(place) != 'number' || place <= 0 || place > 36 || place % 1 != 0) {
        result = 'error!';
    } else {
        let counter = 1;
        while( place >= 4) {
            place = place - 4;
            counter++;
        }
        result = 'done: ' + counter;
    }

    return result;
}

console.log(getCoupe(33));

const transformNumberToDate = function(numberToTransform) {
    const howersStr = ['час', 'часа', 'часов'];
    let result = '';
    if(!numberToTransform || typeof(numberToTransform) != 'number' || numberToTransform < 0 || numberToTransform % 1 != 0) {
        console.log('error!');
    } else {
        let howers = 0;
        while(numberToTransform >= 60) {
            numberToTransform = numberToTransform - 60;
            howers++;
        }
        result += howers;
        if(howers % 10 < 2) {
            result += howersStr[0];
        } else if (howers % 10 < 5) {
            result += howersStr[1];
        } else {
            result += howersStr[2];
        }
        result += ` ${numberToTransform} минут`;
    }
    return result;
};

console.log(transformNumberToDate(2656));

const defineBiggest = function (a, b, c, d){
    let result;
    if(!a || typeof(a) != 'number' || !b || typeof(b) != 'number' || !c || typeof(c) != 'number' || !d || typeof(d) != 'number'){
        result = 0;
    } else {
        result = (a > b ? a : b) > (c > d ? c : d) ? (a > b ? a : b) : (c > d ? c : d);
    }
    return result;
};

console.log(defineBiggest(1, 2, -3.5, -500));

function fib(amount) {
    let result = '',
        resultArr = [0, 1];
    if(typeof(amount) != 'number' || amount % 1 != 0 || amount < 0){
        result = 'error!';
    } else {
        for(let i = 0; i < amount; i++) {
            resultArr[i + 2] = resultArr[i] + resultArr[i + 1];
            result += ` ${resultArr[i]}`;
        }
    }
    return result.trim();
}

console.log(fib(undefined));
*/