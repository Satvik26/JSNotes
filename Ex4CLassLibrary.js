console.log("I am in the Library");

class Library {
   

    constructor(bookList){
             this.bookList = bookList;
             this.issuedBooks = {};
    }

    getBookList(){
          this.bookList.forEach(function(e){
              console.log(e);
          });
    }

    issueBook(bookName , user){
        if(this.issuedBooks.bookName == undefined){
                 this.issuedBooks.bookName = user;
        }
        else{
            console.log("This book is already issued");
        }
 
    }

    returnBook(bookName){
        delete this.issuedBooks.bookName;
    }
    

}


let book = new Library(['Thor','ragnarok','avenger', 'indian']);



console.log(book);

//console.log(book.getBookList());
// console.log(book.issueBook('Thor','Sat'));
// console.log(book.issueBook('Thor','Sahil'));

// console.log(book.returnBook('Thor'));
// console.log(book);
console.log(book.issueBook('Thor','Sahil'));
console.log(book.issueBook('Thor','Sahil1'));
console.log(book.returnBook('Thor'));
console.log(book.issueBook('Thor','Sahil1'));



