'use strict';

const inputUAH = document.querySelector('[data-UAH]');
const inputUSD = document.querySelector('[data-USD]');

inputUAH.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    //request.open(method, url, async, login, password);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'aplication/json: charset=utf-8');
    request.send();

    /*
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'try again later';
        }
    });
    */

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'try again later';
        }
    });


});