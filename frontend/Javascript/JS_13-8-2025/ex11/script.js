//Ex 11 : Create a  date object for 13 th of August 2030 and find out which day it would be.

let date = new Date("2030-8-13");
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = dayNames[date.getDay()];
console.log(dayName);