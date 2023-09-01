// Get the UI elements
let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');



//Book class
class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        
    }
}

// UI class
class UI{
    
    static addToBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class= 'delete' >X</a></td>
        `;
        list.appendChild(row);

    }
    static clearField(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static showAlert(message, clsName){
        let div = document.createElement('div');
        div.className = `alert ${clsName}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);

    }
    
    static deleteBook(target){
        if(target.hasAttribute('href')){
            let row = target.parentElement.parentElement;
            row.remove();
            UI.showAlert('Book Removed Successfully', 'success');
        }
    }
}


// Event Listener
form.addEventListener('submit', newBook);
booklist.addEventListener('click', removeBook);


// Define Functions

// new book function
function newBook(e){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    if(title === '' || author === '' || isbn === ''){
        // show alert
        UI.showAlert("Please fill the all fields!!", "error");

    }else{
        let book = new Book(title, author, isbn);
       
        UI.addToBookList(book);
        UI.clearField();
        UI.showAlert("Book successfully Listed.", "success");
        
    }
    
    e.preventDefault();
}

// remove book function 
function removeBook(e){
    UI.deleteBook(e.target);
    e.preventDefault();
}