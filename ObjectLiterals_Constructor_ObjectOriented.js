console.log("I am in hee");

/*

Object is an unique entity having properties and methods.
-> new keyword make a new object with the help of the constructor.


*/

let car = {
     name : "car",
     topSpeed : 90,
     run : function(){
         console.log("Car is running");
     }

}

console.log(car.name);

// Creating a constructor for cars

function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed  = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`)
    }


}

let car1 = new GeneralCar('XUV300' ,  150);
car2 = new GeneralCar('alto' ,  10);

console.log(car2.run() );



// Object literal : Object.prototype
//when we make a normal object so with the properties and the method we also have Object.prototype which have some built in functions or properties which we can use in our code.

//Its basically from where we have made the object

//Note -> we should not edit the Object.prototype instead we should make our object with the help of a constructor and then override it

//because it will override the global object (used by the engine)from which every object inherits

let obj = {
    name: 'harry',
    channel : 'code with harry',
    address : 'Mars'

}





console.log(obj);

function Obj(gname){

    this.name1  = gname;
    
}

function Objj(gname){

    this.name1  = gname;
    
}

Obj.prototype.getName = function(){
    return this.name;
}

let obj2 = new Obj('Satvik');
let obj3 = new Objj('Sonu');

console.log(obj2,obj3);
