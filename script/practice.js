"use strict";

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
    start: () => {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you watched?", "");
        }
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

const bgMainBlock = document.querySelector('.promo__bg'),
      movieList   = document.querySelector('.promo__interactive-list');

bgMainBlock.querySelector('.promo__genre').textContent = 'ДРАММА';
bgMainBlock.style.backgroundImage = 'url(img/bg.jpg)';

movieList.querySelectorAll('li').forEach( item => item.remove());

personalMovieDB.movies.sort();

personalMovieDB.movies.forEach( (item, index) => {
    movieList.insertAdjacentHTML('beforeend', `
        <li class='promo__interactive-item'>${index + 1}: ${item}
            <div class='delete'></div>
        </li>`);
});


/*
personalMovieDB.start();

personalMovieDB.rememberFilm();
personalMovieDB.detectPersonalLvl();
personalMovieDB.writeYourGenre();
personalMovieDB.toggleVisibleMyDb();
personalMovieDB.toggleVisibleMyDb();

personalMovieDB.showMyDB();
*/


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


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: (object) => {
        let responce = '';
        if(object.age) {
            responce += `My age is ${object.age} and `;
        } else {
            responce += `My age is empty and `;
        }
        if(object.skills.languages) {
            responce += 'my languages are ';
            for( let key in object.skills.languages) {
                responce += `${object.skills.languages[key]} `.toUpperCase();
            }
        } else {
            responce += `my languages are empty too`;
        }
        return responce;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//const {skills} = personalPlanPeter;

//console.log(skills);

function showExperience(plan) {
    //let someArr = [];
    //for(let item in plan) {
    //    if(typeof(plan[item]) === 'object') {
    //        for(let i in plan[item]) {
    //            if(typeof(plan[item][i]) !== 'object') {
    //                someArr.push({i} = plan[item][i]);
    //            }
    //        }
    //    }
    //}
    return plan.skills.exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let responce = '';
    for( let key in plan.skills.programmingLangs) {
        responce += `Language ${key} progress ${plan.skills.programmingLangs[key]} `;
    }
    return responce;
}

console.log(showProgrammingLangs(personalPlanPeter));


const someString = 'This is some strange string';

function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, arr1, missingCurr) {
    let result = 'Доступные валюты:\n';
    if(!arr || !arr1) {
        result = 'Нет доступных валют';
    }
    const arrayCurr = [...arr, ...arr1];
    
    for (let i = 0; i < arrayCurr.length; i++) {
        result += `${arrayCurr[i]}\n`;
        if(missingCurr) {
            continue;
        }
    }

    return result;
}

console.log();


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let value = 0,
        result = '';
    data.shops.forEach( (item) => {
        const {width, length} = item;
        value += width * length;
    });
    const prisePerM3 = value * data.height * data.moneyPer1m3;
    if(data.budget >= prisePerM3) {
        result += 'Бюджета достаточно';
    } else result += 'Бюджета недостаточно';
    return result;
}

console.log(isBudgetEnough(shoppingMallData));


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takeshi', 'Sam'];

function sortStudentsByGroups(arr) {

    let result = [];
    arr.sort();

    for(let i = 0; i < 9; i += 3) {
        result.push(arr.slice(i, i + 3));
    }
    arr.length > 9 ? result.push(`Оставшиеся студенты: ${arr.slice(9).join(", ")}`) : result.push('Оставшиеся студенты: -');

    return result;
    
    //let i = 0;
    //students.sort();
    //function sortStudentsByGroups(arr, i, newArr = []){
    //    if(newArr.length === 3) {
    //        let str = '';
    //        if (arr.length === 9) {
    //            str = `Оставшиеся студенты: -`;
    //        } else {
    //            arr = arr.slice(9);
    //            str = `Оставшиеся студенты: ${arr.join(", ")}`;
    //        }
    //        newArr.push(str);
    //        return newArr;
    //    } else {
    //        newArr.push([arr[i], arr[i + 1], arr[i + 2]]);
    //        return sortStudentsByGroups(arr, i + 3, newArr);
    //    }
    //}
    //return ass(arr, i);
    
}
console.log(sortStudentsByGroups(students));


*/