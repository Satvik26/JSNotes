console.group("I am in");

let cont = document.querySelector('.container');
console.log(cont);

console.log(cont.childNodes); // It gives all the nodes such as newline , comment as text;
console.log(cont.children); // It gives all the child nodes excluding the newline and comments and  * use this when dealing with elements.


let nodeName = cont.childNodes[0].nodeName; // It will give the node name of first element

console.log(nodeName);

// NodeType List 

// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10 Doctype


let nodeType = cont.childNodes[0].nodeType;  // It will tell the nodeType

console.log(nodeType);


let container = document.querySelector('.container');

console.log(container.children[0].children);   // h1

console.log(container.children[2].children);   // ul

console.log(container.children[2].children[0].children);  //li




console.log(container.firstChild);   // It will give the first element of the child Nodes. use when we need comment and newline.

console.log(container.firstElementChild);  // It will give the first element of the child nodes .use when we dont need comment and newline as  nodes


console.log(container.lastChild);
console.log(container.lastElementChild);


console.log(container.childElementCount);


console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);



console.log(container.firstElementChild.nextElementSibling);








