const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const container = document.getElementById('container');
const checkRead = document.getElementById('checkRead');
const formBook = document.getElementById('formBook');

const myLibrary = [];

/* Event listeners */

document.addEventListener('DOMContentLoaded', () => {
    displayBook(myLibrary); // Display all the books

    iterateBook();

    openModal.addEventListener('click', () => {
        modal.showModal();
    });

    formBook.addEventListener('submit', (e) => {
        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const pages = document.getElementById('pages').value;
        const readed = document.getElementById('option');
        const itemSelected = readed.options[readed.selectedIndex].value;

        addBookToLibrary(author, title, pages, itemSelected);
        container.innerHTML = '';
        displayBook(myLibrary);
        iterateBook();
    });
});

/* Functions */

function addBookToLibrary(author, title, numberOfPages, isRead) {
    const newBook = new Book(author, title, numberOfPages, isRead);
    myLibrary.push(newBook);
}

function Book(author, title, numberOfPages, isRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

function switchRead() {}

addBookToLibrary(
    'Marijn Haverbeke',
    'Eloquent JavaScript, Third Edition',
    '472',
    true
);
addBookToLibrary(
    'Nicolás Bevacqua',
    'Understanding ECMAScript 6',
    '352',
    false
);
addBookToLibrary(
    'Scott Chacon',
    'Everything you neeed to know about Git',
    '458',
    true
);

console.log(myLibrary);

function displayBook(books) {
    books.forEach((book, index) => {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" >
                <div class="img">
                    <img class="book-img" src="img/book.png" alt="" sizes="" srcset="">
                </div>

                <p>Author : ${book.author}</p>
                <p>Title : ${book.title}</p>
                <p>Pages : ${book.numberOfPages}</p>
                <div class="toggle">
                    <p>Readed :</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="btn-container">
                    <button class="btn" id="removeCard" data-atribute="${index}">REMOVE</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function removeBook(e) {
    const index = e.target.dataset.atribute;

    myLibrary.splice(index, 1);
    container.innerHTML = '';
    displayBook(myLibrary);
    iterateBook();
}

function iterateBook() {
    const remove = document.querySelectorAll('#removeCard'); // Then selects al the items with the removeCard id

    remove.forEach((element) => {
        element.addEventListener('click', (e) => {
            removeBook(e);
        });
    });
}
