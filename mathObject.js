console.log("I am in");



let z = Math;  //this is a math obj in JS which is having many mathematical funtions

z = Math.PI;
z = Math.E;
z = Math.round(5.6);  // it gives the rounded value 5.3 = 5 & 5.6 =6

z = Math.ceil(5.1);  // It will always give the above value 5.3 = 6 & 5.6=6


z = Math.floor(5.6); // It will always give the lower value 5.3 = 5 & 5.6= 5

z = Math.abs(-9); // always return the postive value -9 = 9 

z = Math.pow(2,3);  //pow(a,b) where a is the the number and b is the power

z = Math.random(); //It will return random number between 0 to 1

//for no 1 to 100

z =  100* Math.random()


//for no 40 to 100

z = 40 +   (100 -40)* Math.random(); 

//for getting integer use ceil and floor according to the requirements

z = Math.ceil(40 +   (100 -40)* Math.random());

z = Math.sqrt(9);

z = Math.max(1,2,3,4,5);
z = Math.min(1,2,3,4,5);

console.log(z);