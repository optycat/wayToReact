"use strict";

/* Задания на урок:

*   1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

*   2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

*   4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"

*   5) Фильмы должны быть отсортированы по алфавиту */

let personalMovieDB = {
    count: 0,
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    actors: {},
    genres: [],
    private: false,
    resetMoviesOnPage: () => {
        /*while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you watched?", "");
        }*/
        movieList.querySelectorAll('li').forEach( item => item.remove());
        personalMovieDB.movies.sort();
        personalMovieDB.movies.forEach( (item, index) => {
        movieList.insertAdjacentHTML('beforeend', `
            <li class='promo__interactive-item'>${index + 1}: ${item}
                <div class='delete'></div>
            </li>`);
        movieList.querySelectorAll('.delete').forEach(item => item.addEventListener('click', deleteYourMovie));
    });
    },
    writeYourGenre: () => {
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

        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Your genre favourite genre # ${index + 1}: ${item}\n`);
        });
    },
    rememberFilm: () => {
        for ( let i = 0; i < 2; i++) {
    
            let lastWathedFilm      = prompt("Name one of the last wathced films", "");
                //lastWatchedFilmMark = +prompt("How it looks on scale 1 to 10?", "");
        
            if( !lastWathedFilm || lastWathedFilm.length > 49 ) {
                i--;
            } else {
                personalMovieDB['movies'].push(lastWathedFilm);// = lastWatchedFilmMark;
        
                lastWathedFilm      = '';
                lastWatchedFilmMark = 0;
            }
        
        }
    },
    detectPersonalLvl: () => {
        if ( personalMovieDB.count <= 10 ) {
            console.log('a few films wathced');
        } else if( personalMovieDB.count <= 30 ) {
            console.log('regular viewier');
        } else if ( personalMovieDB.count > 30 ) {
            console.log('movie buff');
        } else console.log('Error!');
    },
    toggleVisibleMyDb: () => {
        if(personalMovieDB.private === false) personalMovieDB.private = true;
        else personalMovieDB.private = false;
    },
    showMyDB: () => {
        if(personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    }

};

document.querySelector('.promo__adv-title').remove();
document.querySelectorAll('.promo__adv > img').forEach( item => item.remove() );

const bgMainBlock  = document.querySelector('.promo__bg'),
      movieList    = document.querySelector('.promo__interactive-list'),
      form         = document.querySelector('.add'),
      buttonSubmit = form.querySelector('button'),
      inputName    = form.querySelectorAll('input');

bgMainBlock.querySelector('.promo__genre').textContent = 'ДРАММА';
bgMainBlock.style.backgroundImage = 'url(img/bg.jpg)';

const isInputChecked = () => {
    if (inputName[1].checked) {
        console.log("Добавляем любимый фильм");
        inputName[1].checked = false;
    }
};

const addMovie = (event) => {
    event.preventDefault();
    if (!inputName[0].value) {
        console.log('Error!')
    } else if (inputName[0].value.length > 21) {
        personalMovieDB.movies.push(`${inputName[0].value.substring(0, 21)}...`);
        inputName[0].value = '';
        isInputChecked();
    } else {
        personalMovieDB.movies.push(inputName[0].value);
        inputName[0].value = '';
        isInputChecked();
    }
    personalMovieDB.resetMoviesOnPage();
};

const deleteYourMovie = (event) => {
    let tmp = event.target.parentElement.textContent.slice(3).trim(),
        j   = 0;
    for (let i = 0; i < personalMovieDB.movies.length; i++) {
        if (personalMovieDB.movies[i] === tmp) {
            continue;
        }
        personalMovieDB.movies[j] = personalMovieDB.movies[i];
        j++;
    }
    personalMovieDB.movies.pop();
    personalMovieDB.resetMoviesOnPage();
};


buttonSubmit.addEventListener('click', addMovie);
personalMovieDB.resetMoviesOnPage();


/*
personalMovieDB.start();

personalMovieDB.rememberFilm();
personalMovieDB.detectPersonalLvl();
personalMovieDB.writeYourGenre();
personalMovieDB.toggleVisibleMyDb();
personalMovieDB.toggleVisibleMyDb();

personalMovieDB.showMyDB();
*/
