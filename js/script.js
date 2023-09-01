// Get the UI elements
let form = document.querySelector('#book-form');
console.log(form);


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
    constructor(){

    }
    addToBookList(book){
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
    clearField(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    showAlert(message, clsName){
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
    
}

// Event Listener
form.addEventListener('submit', newBook);


// Define Functions
function newBook(e){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    let ui = new UI();
    if(title === '' || author === '' || isbn === ''){
        // show alert
        ui.showAlert("Please fill the all fields!!", "error");

    }else{
        let book = new Book(title, author, isbn);
       
        ui.addToBookList(book);
        ui.clearField();
        ui.showAlert("Book successfully Listed.", "success");
        
    }
    
    e.preventDefault();
}
