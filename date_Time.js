console.log("I am in");
let date = new Date();

console.log(date);

console.log(typeof date);   // object


let otherdate = new Date('8-4-2003 04:05:04');
otherdate = new Date('June 13 1936');
otherdate = new Date('09/16/2021');
otherdate = new Date('8-4-2003 04:05:04');
console.log(otherdate);


let a;

a = otherdate.getDay();  // sun-0 
a = otherdate.getDate();
a = otherdate.getMinutes();
a = otherdate.getSeconds();
a = otherdate.getHours();
a = otherdate.getTime();  // its basically a time stamp which tells the seconds which have passed from that date
a = otherdate.getMilliseconds();
a = otherdate.getMonth(); //Jan-0
otherdate.setDate(31);
console.log(a);

otherdate.setDate(31); //for changing the date for setting anything
console.log(otherdate);


