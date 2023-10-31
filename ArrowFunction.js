console.log("I am in Arrow");

//Creating an regular function

function harry(){

    console.log("sats");


}

const harry1 = function(){
    console.log('I am using an variable for the function');
}

harry();
harry1();

//converiing into arrow function

const harr2 = ()=>{
    console.log('I am using the arrow function');
}
harr2();



const h1 = ()=>{
    return 'Goodeve';
}
console.log(h1());


//One liners do not require curly braces/return
//one liner will automatically return

const h = ()=> 'Good Morning';
console.log(h());  //Good Morning



//return an object

const greet = ()=> ({name:'harry'});

console.log(greet);   // ()=> ({name:'harry'})
console.log(greet()); // {name: "harry"}
console.log(greet.name);   //greet



//if there is an single parameter no need to pranthesis
//but we need to put paranthesis if there are multiple parameters

const sat = name => "Good Morning " + name;
console.log(sat('sahil'));   // Good Morning sahil