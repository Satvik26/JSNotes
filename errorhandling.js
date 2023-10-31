console.log('I am in error handling');


// we can write any code in try if we are not sure if it will work or not if it works its fine but if we get error the catch will get executed it wont stop the program and print the error in the form of string 

//finally is the part of code which will run no matter what happens
//throw new Error stop the program. Sometimes we need to throw error and stop executing the program
let a ='harry bhai';

a = undefined;

if(a != undefined){
    throw new Error('this is not defined');
    
    
}
else{
    console.log('This is defined');
    
}

try{
    console.log("we are inside try block");
    func();

} catch(error){

    console.log('Are you okay'+error);
    
}

finally {
    console.log('we have to do this');
    
}

