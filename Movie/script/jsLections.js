"use strict";

//lection 8 объявление переменных
/*
let num = 5;
const leftBorderWidth = 50;

num = 10;
console.log(num);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

console.log(name);
var name = 'str';

{
    let res = 10;
}

console.log(res);
*/

//lection 11 типы данных

/*

// ---- Primitives

numbers         1, 2, 500000000
NaN             not a number

string          'jgoisjregs'  "156"  `re14y56h`

boolean         true/false

null            Referense error
undefined       

Symbol
Bigint

// ---- Objects

arrays          [1, 'gdf', null]


               0        1     2     3    4   5
let arr = ['fsdefh', 'srdgg', 4, false, {}, []];
    console.log(arr[2]);

//___________________//

objects         { age: 50,  name: 'Sarah', isMarryed: false }


const person= { 
                age: 50,  
                name: 'Sarah', 
                isMarryed: false 
            }

    console.log(person.age);
    console.log(person['name']);

//___________________//

*/

//lection 12 работа с объектами

/*

const arr = ['a', 'b', 'c'];
const arrObj = {
    a: 'a',
    '1': 'b',
    3: 'c',
    abc: {
        def: {
            a: 4
        },
        fff: [{}, {}]
    }
};

const d = 'd';


arrObj.b = '1234';
arrObj['c'] = '4321';
arrObj[d] = '1234';

*/

//lection 13 работа с юзером

/*

alert('something');

const result = confirm('R u here?');
console.log(result);

let ansver = prompt("R u adult?", "");
    ansver = +prompt("R u adult?", "18");
console.log(ansver);
console.log(typeof(ansver));    //string

console.log(ansver + 5);

const ansvers = [];

answers[0] = prompt('name', '');
answers[1] = prompt('age', '');
answers[2] = prompt('sername', '');

document.write(ansvers);

console.log(typeof(ansvers));   //object
console.log(typeof(null));      //object

*/

//lection 14 интерполяция

/* 

const category = 'toys';

console.log("dweytjrtfyuj/" + category);
console.log(`dweytjrtfyuj/${category}`);

*/

//lection 14 операторы js

/* 

+'4'            string to number 
4 + '5'         concatination

let incr = 10,
    decr = 10;

    incr++;      use old value, than change
    --decr;      change old value, than use

5 % 2            1

2 * 8 == 16      true
2 * 8 == '16'    true

2 * 8 === 16     true
2 * 8 === '16'   false

2 * 3 != 16      true
2 * 3 != '16'    true

2 * 3 !== '6'    true
2 * 3 !== 6      false

let test1 = 10,
    test2 = true;

console.log(incr && decr);       10
console.log(test1 && test2);     true

test1 = true;
console.log(test1 && test2);     true

test2 = false;
console.log(test1 && test2);     false

test1 = false;
console.log(test1 && test2);     false


test1 = 10;
test2 = true;

console.log(incr || decr);       10
console.log(test1 || test2);     true

test1 = true;
console.log(test1 || test2);     true

test2 = false;
console.log(test1 || test2);     true

test1 = false;
console.log(test1 || test2);     false


let test3 = true;
console.log( !test3 );             false

let test3 = true;
console.log( !test3 );             false

*/

//lection 20 условия

/*

if(4 == 9){
    console.log('ok');
}else{
    console.log('error!');
}

let num = 50;

if(num == 9){
    console.log('error');
}else if(num){
    console.log('ok!');
}

(num === 50) ? console.log('error') : console.log('ok!');

switch (num) {
    case 49: 
        console.log('not enoth');
        break;
    case 50: 
        console.log('right here!');
    case 100: 
        console.log('to much');
    default:
        console.log('not this time? buddy)');
        break;
}

const   burger = 40,
        fries  = 50,
        cola   = 0;

if( burger >= 5 && fri >= 4 && cola){
    console.log('I need a cola)');
}


false       0   ''  null    undefined   NaN


&&          stops on a first false, and returns last true state/meaning (if typeof(variable) != boolean) 

||          stops on a first true, and returns last false state/meaning (if typeof(variable) != boolean) 


*/

//lection 22 циклы

/*


let num = 50;

while (num <= 55) {
    console.log(num);
    num ++;
}

num = 50;
do {
    console.log(num);
    num ++;
}
while (num < 55);

for ( let i = 0; i >= 10; i++) {
    if (i === 6) {
        i++;
        continue;
        break;
    }

    console.log(i);
}


let tmp = '';

for ( let i = 1; i < 6; i++ ) {
    let str = '*';
    
    for ( let j = 0; j < i; j++ ) {
        tmp += str;

    }
    console.log(tmp);
    tmp = '';
}


start: for ( let i = 1; i < 6; i++ ) {
    let str = '*';
    
    for ( let j = 0; j < i; j++ ) {
        tmp += str;
        for ( let k = 0; k < j; k++ ) {
            if ( k === 2 ) continue start;
            
            console.log(k);

    
        }
    }
    console.log(tmp);
    tmp = '';
}


*/

//lection 25 функции

/*


let someText = 'message',
    num = 20;

function showMassage(massage) {
    console.log(massage);
    let num = 10;
    console.log(num);
}

showMassage(someText);

console.log(num);

function calc(a, b) {
    return a + b;
}

console.log(calc(3, 5));

const logger = function() {
    console.log('U logged!')
};

logger();

const calc = (a, b) => {
    return a + b;
};


const usdCurs = 31.52,
      eurCurs = 33.1,
      discont = 0.8472;

function convert(amount, curr){
    return amount * curr;
}

function promotion(curs) {
    console.log(curr * discont);
}

convert(500, usdCurs);

promotion(convert(500, usdCurs));

const res = convert(500, eurCurs);
promotion(res);

function test() {
    for(let i = 0; i < 5; i++){
        console.log(i);
        if (i === 3) return
    }
    console.log('done!');
}

test();

function doNothitg(){};
console.log(doNothitg());


*/

//lection 25 методы строк и чисел

/*


string                                  can get acses to symbol using []
length                                  how many elements in array or symbols in string
toUpperCase/toLowerCase                 changes the register of string withot changing base string
inexOf(something)                       returns index of something if string contais something, else returns -1
slise(startIndex, endIndex)             returns a part of string from startIndex(with it) to endIndex(without it)
                                        if u set just startIndex, method returns a part of string from startIndex to end of a string
                                        if startIndex/endIndex is negative it will work too
substring(startIndex, endIndex)         returns a part of string from startIndex to endIndex
substr(startIndex, amountOfSymbols)     returns a part of string from startIndex to startIndex + amoutnOfSymbols
trim                                    removes all spaces from start and end of the string

number
Math.____()                             all math with a number
parseInt()                              parses some string to number or number to enothe dimention (from decimal to hex for example)
parseFloat()                            parses itneger to float


*/

//lection 31 callback

/*


function first() {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`i learn ${lang}`);
    callback();
}

function done() {
    console.log('lesson is over');
}

learnJS('JavaScript', done);


*/

//lection 32 деструктуризация объектов

/*

const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: '#333',
        bg: '#fff'
    },
    makeTest: function() {
        console.log('test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);

delete options.name;

let counter = 0;
for (let key in options) {
    if(typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`prop: ${i} contains ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`prop: ${key} contains ${options[key]}`);
        counter++;
    }
}


*/

//lection 33 массивы и псевдомассивы

/*


const arr = [1, 2, 3, 4, 8];

arr.pop();                                              delete last element from arr
arr.push(10);                                           add 10 to the end of arr
arr.length;                                             last index of arr +1

const str = 'some string';
const prod = str.split(' ');                            turns string to array
prod.join(' ');                                         turns array to string

arr.sort(compareNum);                                   sorts arr from smallest item to biggest

function compareNum(a, b){
    return a - b;
}


for (let value of arr) {                                can use break and continue

}

arr.forEach( (itemOfArr, indexOfItem, arr) => {

});


*/

// lection 35 передача по ссылке и по значению spread operator

/*


let a = 5;
let b = a;

b = b + 5;

console.log(a, b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;                   creates link to the obj
copy.a = 50;

console.log(obj, copy);

const copyObject = (mainObject) => {
    let objCopy = {};

    let key;
    for (key in mainObject) {
        objCopy[key] = mainObject[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 55,
    c: {
        x: 7,
        y: 4
    }
};

const newObj = copyObject(numbers);

numbers.a = 10;
newObj.c.x = 10;

console.log(numbers, newObj);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add, clone);

const oldArr = ['a', 'b', 'c'];
const newArray = oldArr.slice();

const video = ['tube', 'vimeo', 'netflix'],
      blogs = ['hub', 'rezka', 'binance'],
      internet = [...video, ...blogs, 'fasebook'];

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const some = [1, 3, 5];

log(...some);

const arrrdaay = ['a', 'b'];

const copyArrr = [...arrrdaay];

const q = {
    one: 1,
    two: 2
};

const nardlwfeaObj = {...q};


*/

// lection 36 ООП

/*


const solider = {
    health: 400,
    armour: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const franf = Object.create(solider);

const sam = {
    health: 100
};

sam.__proto__ = solider;
Object.setPrototypeOf(sam, solider);

console.log(sam.armour);

sam.sayHello();


*/

// lection 39 динамическая типизация

/*


// to string

console.log(typeof(String(null)));

console.log(typeof(String(4)));

console.log(typeof(5 + ''));


// to number

console.log(typeof(Number(null)));

console.log(typeof(+'5'));

console.log(typeof(parseInt('15px', 10)));

console.log(typeof(+'4'));


// to bool

false               0, '', null, undefined, NaN

let switcher = null;

if(switcher) {
    console.log('Working...');
}

switcher = 1;

if(switcher) {
    console.log('Working...');
}


console.log(typeof(Boolean('4')));

console.log(typeof(!!'sdghsd'));


*/

// lection 40 замыкание

/* 

function createCounter() {
    let counter = 0;
    
    const myFunc = function() {
        counter = counter + 1;
        return counter;
    };

    return myFunc;
}

const increment = createCounter();

const   c1 = increment(),
        c2 = increment(),
        c3 = increment();

console.log(c1, c2, c3);



//  const result = getSum(5, 6);
//  function getSum(a, b) {
//      return a + b;
//  }
//  
//  let arr = [function(){console.log(1)}, '1'];
//  console.log(0 || NaN || false || null)


function foo(a,b) {
    const [1] = a;
    const {eng} = b;
 
    return `${1} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log(result)


*/

// lection 41 задачи с собеседования

/* 

[]      в простых математических операциях приводиться к строке

             'false'  NaN    NaN
console.log([] + false - null + true);

console.log([] + 1 + 2);

console.log(2 && 1 && null && 0 && undefined);

            3   3    3
alert(null || 2 && 3 || 4);

console.log(0 || "" || 2 || undefined || true || falsе );

*/

// lection 42 получение елементов со страницы

/*

const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons);

const circles = document.getElementsByClassName('circle');
console.log(circles);


const hearts = document.querySelectorAll('.heart');

hearts.forEach( (item) => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

*/

// lection 43 действие с елементами со страницы

/*

const wrapper  = document.querySelector('.wrapper'),
      box      = document.getElementById('box'),
      buttons  = document.getElementsByTagName('button'),
      circles  = document.getElementsByClassName('circle'),
      hearts   = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '250px';

const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//for(let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Pres F to pay respect!');

div.classList.add('black');

wrapper.append(div);
wrapper.prepend(div);

wrapper.appendChild(div);

hearts[0].before(div);
hearts[0].after(div);

wrapper.insertBefore(div, hearts[1]);

circles[0].remove();
wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);
wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<p>Hi, there!</p>';

div.textContent = 'Hi, biach!';

div.insertAdjacentHTML('afterbegin', '<h2>height</h2>');

*/

// lection 45 события и их обработчики

/*

//<button onclick="alert('CLICK!')"></button>

const btn = document.querySelector('button'),
      ovellay = document.querySelector('.overlay');

btn.onclick = () => {   // can use only once, and cant be deleted
    alert('CLICK!');
};

const deleteElement = (event) => {
    let i = 0;
    i++;
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
    //if(i == 1) {
    //    event.target.remove();
    //}
    //alert('click!');
};

btn.addEventListener('click', deleteElement);   //can deal with multiple actions on one element
btn.removeEventListener('click', deleteElement);
ovellay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

const btns = querySelectorAll('button');

btns.forEach (item => {
    item.addEventListener('click', deleteElement, {once: true});
});

*/

// lection 46 навигация по DOM, преймущества for of

/*

console.log(document.body);
console.log(document.head);
console.log(document.documentElement);

console.log(document.body.childNodes);

document.body.firstChild;
document.body.lastChild;

document.querySelector('#current').parentNode.parentNode;

document.querySelector('[data-current = "3"]').nextSibling.previousSibling;
document.querySelector('[data-current = "3"]').nextElementSibling.previousElementSibling;
document.querySelector('[data-current = "3"]').parentElement;
document.querySelector('[data-current = "3"]').firstElementChild;

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}

*/

// lection 47 рекурсия

/*

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

pow(2, 1);  //2
pow(2, 2);  //4
pow(2, 3);  //8
pow(2, 4);  //16

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 68
    }],
    html: {
        basics: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 15
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressIteration(data) {
    let total = 0,
        students = 0;

    for (let item of Object.values(data)) {
        if (Array.isArray(item)) {
            students += item.length;
            for (let i = 0; i < item.length; i++) {
                total += item[i].progress;
            }
        } else {
            for (let subItem of Object.values(item)) {
                students += subItem.length;

                for (let i = 0; i < subItem.length; i++) {
                    total += subItem[i].progress;
                }
            }
        }
    }

    return total / students;
}

//console.log(getTotalProgressIteration(students));


function getTotalProgressRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressRecursion(students);
console.log(result[0] / result[1]);


function factorial(n) {
    if (typeof(n) != 'number' || n % 1 !== 0) {
        return 'Error!';
    } else {
        if (n === 1) {
            return n;
        } else if (n <= 0) {
            return 1;  
        } else {
            return n * factorial(n - 1);
        }
    }
}

console.log(factorial(0));

*/

// lection 49 события на мобилке

/*

touchstart
touchmove
touchend
touchenter
touchleave
touchcansel

event.touches
event.targetTouches
event.changedTouches

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', event => {
        event.preventDefault();
        console.log('start');
    });


});

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

// lection 50 classList и делигирование событий

/*

const btns          = document.querySelectorAll('button'),
      btnsParrent   = document.querySelector('.button-wrapper');

btns[0].classList.length;
btns[1].classList.item(0);
btns[2].classList.add('red', 'awfsffff');
btns[2].classList.remove('red');
btns[1].classList.toggle('blue');

if (btns[2].classList.contains('red')) {
    console.log('Smth happend');
}

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[2].classList.add('red', 'awfsffff');
    } else {
        btns[2].classList.add('red', 'awfsffff');
    }

    btns[1].classList.toggle('red');
});

btns[0].className;                  //old code

btnsParrent.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        event.target && event.target.mathces === 'button.red'
        console.log(event.target);
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
btnsParrent.append(btn);

*/

// lection 65 setTimeout setInterval

/* 

const btn = document.querySelector('.btn');
let someTimeout,
    i = 0;

btn.addEventListener('click', () => {
    someTimeout = setInterval(logger, 2000);
});

const timerId = setTimeout( (text) => {
    console.log(text);
}, 2000, 'hello');

setTimeout(logger, 2000);

clearInterval(timerId);

function logger () {
    if (i === 3) {
        clearInterval(someTimeout);
    }
    console.log('text');
    i++;
}

let id = setTimeout (function log () {
    console.log('hell');
    id = setTimeout(log, 500);
}, 500);

function myAnimation () {
    const element = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

*/

// lection 68 работа с датами

/* 

const now = new Date('2022-11-14');

new Date.parse('2022-11-14');
console.log(now);

const yes = new Date(2022, 11, 14, 10);
console.log(yes);

const ms = new Date(-9999999999999);
console.log(ms);

console.log(now.getFullYear());
console.log(now.getFullMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getDay());      //sunday === 0
console.log(now.getTimezoneOffset());
console.log(now.getTime());

console.log(now.setHours(40));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(end - start);

*/

// lection 71 параметры документа, окна и работа с ними

/*

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

const width1 = box.offsetWidth;
const height1 = box.offsetHeight;

const width2 = box.scrollWidth;
const height2 = box.scrollHeight;

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop = 0);

window.scrollBy(x, y); //от текущей позиции скролит на y вниз и на х вправо

window.scrollTo(x, y); //от верха страницы

*/

// lection 75 функции-констукторы

/* 

const num = new Number(3);
console.log(num);

const num1 = new Function(3);
console.log(num1);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Hello, ${this.name}!`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} is gone`);
};

const ivan = new User('Ivan', 51);
const alex = new User('Alex', 54);

alex.hello();
alex.exit();

console.log(ivan);
console.log(alex);

*/

// lection 76 контекст вызова this

/* 


// 1 //////////////////////////////////////////////////////////////

function showThis(a, b) {
    console.log(this);                  //undefined
    function sum() {
        console.log(this);              //undefined
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5);


// 2 //////////////////////////////////////////////////////////////

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);          //undefined
        }
        shout();
        console.log(this);              //object obj
    }
};

obj.sum();


// 3 //////////////////////////////////////////////////////////////

function User(name, id) {
    this.name = name;                                   //ivan
    this.id = id;                                       //ivan
    this.human = true;                                  //ivan
    this.hello = () => {                                //ivan
        console.log(`Hello, ${this.name}!`);            //ivan
    };
}

const ivan = new User('Ivan', 23);

// 4 //////////////////////////////////////////////////////////////
function sayName(sername) {
    console.log(this);                                  //user
    console.log(this.name + sername);                   //user
}

const user = {
    name: 'Jhon'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Sarah']);

function count(num) {
    return this * num;                                  //2
}

const double = count.bind(2);
console.log(double(5));

// 1) обычная ф-ция - this = window, а при use strict this = undefined
// 2) контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это екземпляр объекта
// 4) this привязывается вручную
// () => {} не имеет контекста вызова, а берет его у родителя

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});

const some = {
    num: 5,
    sayNum: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

some.sayNum();

const calc = a => a * 2;

console.log(calc(4));

const btn1 = document.querySelector('button');

btn1.addEventListener('click', (e) => {
    console.log(this);
    e.target.style.backgroundColor = 'red';
});

*/

// lection 77 классы

/* 

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.width * this.height;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(width, height, text, bgColor) {
        super(width, height);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hi, beach, sunset', 'red');
div.showMyProps();
console.log(div.calcArea());


const squere = new Rectangle(10, 10);

console.log(squere.calcArea());

*/

// lection 80 Rest оператор и параметры по умолчанию

/* 

const log = function(a, b, ...rest) {

    console.log(a, b, ...rest);
};

log('a', 'b', 'fzs', 'segvd', 'sfe');


const calcOrDouble = function(number, basis = 2) {
    console.log(number * basis);
};

calcOrDouble(3);

*/

// lection 82 JSON, глубокое клонирование объектов

/*

const persone = {
    name: 'Alex',
    phone: '+8451324512',
    parents: {
        mom: 'Olha',
        dad: 'Sam'
    }
};

console.log(JSON.stringify(persone));

console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Nina';
console.log(persone, clone);

*/

// lection 86 Promise ES6

/* 

console.log('data request...');

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('prepare...');
    
        const good = {
            name: 'TV',
            price: 2000
        };
    
        resolve(good);
    }, 2000);
});

req.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.status = 'ordered';
            console.log('changing...');
            resolve(data);
            //reject();
        }, 2000);
    });
}).then( data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data)
}).catch(() => {
    console.error('Error!');
}).finally(() => {
    console.log('Finally!');
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000ms'));
//test(2000).then(() => console.log('2000ms'));

//Promise.all([test(1000), test(2000)]).then(() => {
//    console.log('All');
//});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});

*/

// lection 87 Fetch API

/* 

    //GET
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json) 
    //POST
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({name: 'Alex'}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));

*/

// lection 88 Методы перебора массивов

/* 

// filter

const names = ['fffff', 'huj', 'jiomklfdgfx', 'f', 'oin'];

//const shortNames = names.filter((name) => {
//    return name.length < 5;
//});

const shortNames = names.filter((name) => name.length < 5);

console.log(shortNames);

// map

const answers = ['sdrsgtf', 'MOMmvodsl;,df', 'ADFESGRH', 'KbiunNUNIUuni'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// every/some

const someArr = [4, 'MOMmvodsl;,df', 'ADFESGRH', 'KbiunNUNIUuni'];

console.log(someArr.some(item => typeof(item) === 'number'));
console.log(someArr.every(item => typeof(item) === 'number'));

// reduse

const ffff = [4, 5, 2, 1, 6, 3];
const res = ffff.reduce((sum, current) => sum + current);
console.log(res);

const fruits = ['sdrsgtf', 'MOMmvodsl;,df', 'ADFESGRH', 'KbiunNUNIUuni'];
const r = fruits.reduce((sum, current) => `${sum}, ${current}`);
console.log(r);

const ffff1 = [4, 5, 2, 1, 6, 3];
const res1 = ffff1.reduce((sum, current) => sum + current, 3);
console.log(res1);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
                .filter(item => item[1] === 'persone')
                .map(item => item[0]);

console.log(newArr);

*/

// lection 88 Методы перебора массивов
/* */


