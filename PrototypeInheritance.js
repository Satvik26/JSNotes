console.log("I am in here");

const proto = {

    slogan : function(){
        return `This company is the best`;
    },
    changeName : function(newName){
        this.name = newName;
    }
}

//This creates an harry object
const harry = Object.create(proto);

harry.name = 'Haarry2';
harry.age = 10;
harry.changeName('satvik');
console.log(harry);

// This also creates an harry object

const harry1 = Object.create(proto, {
    name : {value : 'harry' , writable : true},
    role : {value : 'programmer'}
})

harry1.changeName("sahil");
console.log(harry1);



// Created an Employee constructor

function Employee(name , salary , experience){
    this.name = name ;
    this.salary = salary;
    this.experience = experience;
}

// added an function using the constructor
Employee.prototype.slogan = function(){

    return ` This company is the best regards.<br>${this.name}`
}

let harryObj = new Employee('Sonu', 1000000, 10 );

console.log(harryObj);
console.log(harryObj.slogan());


// add any function which can be called when you want

// Note : ->> First we used to inherit properties from one object to other using prototype
// Now a days we inherit using the classes which is in the ES6

//Programmer

function Programmer(name , salary , experience , language){
    Employee.call(this, name , salary , experience);  // used to inherit the properties from the employees
    this.language = language;
}


// Inherit the prototype

Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor


Programmer.prototype.constructot = Programmer;


let rohan = new Programmer('Rohan' , 2 , 4 ,"JavaScript");
console.log(rohan);