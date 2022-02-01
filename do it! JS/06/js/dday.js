const now = new Date().getTime();
const firstDay = new Date('2022-01-31').getTime();
const passedDay = Math.round((now - firstDay) / (1000 * 60 * 60 * 24));

document.querySelector('#accent').innerText = passedDay + '일';

const hundred_time = new Date(firstDay + 100 * 24 * 60 * 60 * 1000);
const hundred_year = hundred_time.getFullYear();
const hundred_month = hundred_time.getMonth();
const hundred_day = hundred_time.getDate();
document.querySelector('#date100').innerText = `${hundred_year}년 ${
  hundred_month + 1
}월 ${hundred_day}일`;

const hundred2_time = new Date(firstDay + 200 * 24 * 60 * 60 * 1000);
const hundred2_year = hundred2_time.getFullYear();
const hundred2_month = hundred2_time.getMonth();
const hundred2_day = hundred2_time.getDate();
document.querySelector('#date200').innerText = `${hundred2_year}년 ${
  hundred2_month + 1
}월 ${hundred2_day}일`;

const one_time = new Date(firstDay + 365 * 24 * 60 * 60 * 1000);
const one_year = one_time.getFullYear();
const one_month = one_time.getMonth();
const one_day = one_time.getDate();
document.querySelector('#date365').innerText = `${one_year}년 ${one_month + 1}월 ${one_day}일`;

const five_time = new Date(firstDay + 500 * 24 * 60 * 60 * 1000);
const five_year = five_time.getFullYear();
const five_month = five_time.getMonth();
const five_day = five_time.getDate();
document.querySelector('#date500').innerText = `${five_year}년 ${five_month + 1}월 ${five_day}일`;
