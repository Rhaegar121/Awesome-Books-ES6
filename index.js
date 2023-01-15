import Books from './modules/book.js';

// menu buttons closed
const form = document.querySelector('#form');
const bookList = document.querySelector('.book-list');
const titleInput = document.querySelector('#input_title');
const authorInput = document.querySelector('#input_author');
const addBtn = document.querySelector('#add_btn');

class Library {
  constructor() {
    this.Library = JSON.parse(localStorage.getItem('collections')) || [];
  }

  addBook() {
    const newBook = new Books();
    newBook.title = titleInput.value;
    newBook.author = authorInput.value;
    this.Library.push(newBook);
    localStorage.setItem('collections', JSON.stringify(this.Library));
    this.showBook();
  }

  showBook() {
    bookList.innerHTML = '';
    this.Library.forEach((collection, i) => {
      bookList.innerHTML += `<div id="${i}" class="books">
            <p class="book-info">
                <span class="title">"${collection.title}" by ${collection.author}</span>
            </p>
            <button class="remove-btn">Remove</button>
    </div>`;
    });
  }

  removeBook(book) {
    book.parentElement.remove();
    this.Library = this.Library.filter((collection, i) => i !== Number(book.parentElement.id));
    localStorage.setItem('collections', JSON.stringify(this.Library));
  }
}

window.onload = () => {
  const newLibrary = new Library();
  newLibrary.showBook();

  form.addEventListener('submit', (e) => {
    if (titleInput.value !== '' && authorInput.value !== '') {
      e.preventDefault();
      addBtn.disabled = false;
      newLibrary.addBook();
      titleInput.value = '';
      authorInput.value = '';
      newLibrary.showBook();
    } else {
      addBtn.disabled = true;
    }
    window.location.reload();
  });

  bookList.addEventListener('click', (e) => {
    if (e.target.className.includes('remove-btn')) {
      const data = e.target;
      newLibrary.removeBook(data);
    }
    window.location.reload();
  });
};

// calling all views
// menu buttons
const booksListView = document.querySelector('#books-list-view');
const addNewBookView = document.querySelector('#add-book-view');
const contactView = document.querySelector('#contact-us-view');

// calling section
const listbook = document.querySelector('#books-list');
const addbook = document.querySelector('#add-book');
const contactus = document.querySelector('#contact-us');

booksListView.onclick = () => {
  booksListView.classList.add('active');
  contactView.classList.remove('active');
  addNewBookView.classList.remove('active');
  listbook.style.display = 'block';
  contactus.style.display = 'none';
  addbook.style.display = 'none';
};

contactView.onclick = () => {
  contactView.classList.add('active');
  booksListView.classList.remove('active');
  addNewBookView.classList.remove('active');
  contactus.style.display = 'block';
  addbook.style.display = 'none';
  listbook.style.display = 'none';
};

addNewBookView.onclick = () => {
  addNewBookView.classList.add('active');
  booksListView.classList.remove('active');
  contactView.classList.remove('active');
  addbook.style.display = 'block';
  contactus.style.display = 'none';
  listbook.style.display = 'none';
};
