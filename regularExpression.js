console.log('I am in Regular exp');

//  regular expression literal   /write the regular expression here/



//for finding more than one occurnece we use flag 
// 1. g means global   which is basically global and it will give all occurence on running the code first time it will give first occurence and running the code second time it will giove the second occurence

//2. i means case insensitive


// let reg = /satvik/g;
//  reg = /satvik/i;
//let reg = /satvik/gi;

let reg = /satvik/;

console.log(reg);
console.log(reg.source);



let s= 'this is great code with Satvik an satvik';


//Functions for match expression

//1. exec()   -> the function will return an array for match or null for no match


let result = reg.exec(s);
console.log(result);  //["satvik", index: 24, input: "this is great code with satvik an satvik", groups: undefined]
// we can use result.index result.input also.  -> If the result is null the it will throw erroe when accessing the result.index So we can put a condition that if if result is not equal to null then only access the result.index and other properties
 result = reg.exec(s);
console.log(result);  //["satvik", index: 34, input: "this is great code with satvik an satvik", groups: undefined]





// 2. test() - returns true or false
//if regular expression is there in string then will return true else return false


let result2 =  reg.test(s);
console.log(result2); 



//3. match()  -It will return an array of results or null

//let result3 = reg.match(s);   this is wrong

let result3 = s.match(reg);
console.log(result3);
// It will return an array of results or null;




//4. search()  -  returns index of first match or  -1


//let result4 = reg.match(s);   this is wrong

let result4 = s.search(reg);
console.log(result4);



//5. replace()  - It will return new replaced string with all the replacements    . If no flag is given then it will replace first occurence


let result5 = s.replace(reg , 'sahil');
console.log(result5);   //this is great code with Satvik an sahil



//REGULAR EXPRESSIONS METACHARACTER SYMBOLS

let regex = /harr6y/;

regex = /^har/     //  ^  means string start with har  

regex =/harry$/    //  $ means string ends with harry

regex = /h.rry/  // . means matches any one orzero character
regex = /h*rry/  // . means matches 0 or  more character

regex = /ha?rryi?/  //  a? and i? means it is optional if its there then also it will match and its not there then also it will match

regex = /h\*rry/   // if we want to match the meta character symbols then use blackslah

let str  = 'hassssssrry is h*rry';

let res  = regex.exec(str);

console.log('This result from exec is ' , res);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
    

}

else{

    console.log(`The string ${str} does not matches the expression ${regex.source}`);
    
}





// Character sets  -  []


let  re = /h[aty]rry/;  // Can be any a, t, y

re = /h[a-z]rry/;    // can be anything a-z

re = /h[^aty]rry/;    // can be anything except a, t, y
re = /h[aty]rr[y]/;   // we can add multiple character sets

re = /h[a-zA-Z]rr[y0-9]/;  // will match if we have a to z or A to Z   
// either it can be y or any number between 0 to 9

 
// Quantifiers  use {}
 
re  = /har{2}y/    // r can occur two times
re  = /har{0,2}y/   // r can occur 0 to 2 i.e 0 or 1 or 2



//groupings   use ()

re = /(har){2}/    // har should come two times or more i.e. harhar if there 

re  = /(har){2}([0-9]r){3}/  // this string will match for the regex harhar1r2r3r bhai
const st = "harry bhai";

let res1  = re.exec(st);

console.log('This result from exec is ' , res1);


if(re.test(st)){
    console.log(`The string ${st} matches the expression ${re.source}`);
    

}

else{

    console.log(`The string ${str} does not matches the expression ${re.source}`);
    
}






let vishu = /[a-zA-z0-9]{4,20}\@[a-z]{2,10}\.[a-z]{1,5}/;

vishu = /^[0-9]{10}$/;

let pd = "satvikbisht26@gmailcom";
pd = "755016736";

if (vishu.test(pd)){
    console.log("yes");
}

else{
    console.log('No');
    
}

