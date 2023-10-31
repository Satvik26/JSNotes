console.log("I am in");

// let h1 = document.createElement("a");
// let h1Text =  document.createTextNode("Go to Code With Harry");
// h1.appendChild(h1Text);

 let bdy = document.querySelector('body');
// let h = bdy.appendChild(h1);



let a = document.createElement("a");
a.setAttribute('href','https://www.codewithharry.com');

let at = document.createTextNode('GO to code for harry');
// a.style.textDecoration = none;
a.appendChild(at);

bdy.appendChild(a);

a.style.textDecoration = 'none';
a.style.target = '_blank';
console.log(h);


// h.appendChild(a);




