console.log("I am in  f");

// Class is a template or blueprint having some properties and methods

class Employee {
  //An constructor is a function which runs when there is a object made or object created of the class

  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }

  slogan(){
    return `I am ${this.name}. This company is the best`;

  }

  joiningYear(){
     return 2020 -this.experience;
  }
 
  //if you want to make any function which you want to use without making an object and then using the function with object. We can use the static method
  static add(a,b){
      return a+b;
  }
}

let harry = new Employee('Satvik' , 10 , "Payment");


console.log(harry , harry.slogan , harry.slogan(), harry.joiningYear());


// We haven't made any object before using the function. It is  possible because of the static keyword
console.log(Employee.add(10,20));



// Inherit Programmer from Employeee;

class Programmer extends Employee{

    constructor(givenName, givenExperience, givenDivision ,givenLanguage){
    super(givenName, givenExperience, givenDivision);   // It calls the parent class constructor eg: Employee Constructor
    this.language = givenLanguage;

    }


     favLanguage(){
        if(this.language == 'Python'){
            return 'Python';
        }
        else{
            return 'JS';
        }
    }

    static Multiply(c,d){   // we can't use this overhere
        return c*d;
    }

}


let pObj = new Programmer('Vishu' , 10 , 'CPU' ,"JavaScript");

console.log(pObj);
console.log(pObj.favLanguage());
console.log(Programmer.Multiply(1,3));
