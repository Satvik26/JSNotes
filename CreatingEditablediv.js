console.log("I am in");

// let content = document.getElementById('edittext');


// content.addEventListener('click' , EditableBox);

// function EditableBox(e){
// console.log("I am in editable box");

// let di = document.getElementById('edit');

// let newElem = document.createElement("input");

// newElem.type = 'password';


// let newElemTxt = document.createTextNode("I am node");

// newElem.appendChild(newElemTxt);

// di.appendChild(newElem);



// }


let  divElem = document.createElement('div');
let text = document.createTextNode('This is my element text');
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width:154px ; margin:34px;padding:23px;');

divElem.appendChild(text);
let container = document.querySelector('.container');

let first = document.querySelector('#myfirst');

container.insertBefore(divElem,first);



//first.appendChild(divElem);

console.log(divElem,container,first);

divElem.addEventListener('click', function(){

    let no = document.getElementsByClassName("form-control").length;

    if(no == 0 ){

    let html =  divElem.innerHTML;
    
    
    divElem.innerHTML = `<textarea class="form-control" id="ex" rows="3" >${html}</textarea>`;

    }


    let textarea = document.getElementById('ex');

    textarea.addEventListener('blur', function(){
      

        elem.innerHTML = textarea.value;

        localStorage.setItem('text',textarea.value);



    })

});

