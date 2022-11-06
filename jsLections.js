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

number
Math.____()                             all math with a number
parseInt()                              parses some string to number or number to enothe dimention (from decimal to hex for example)
parseFloat()                            parses itneger to float


*/

//lection 25 методы строк и чисел

