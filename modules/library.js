import Books from './book.js';
import { bookList, titleInput, authorInput } from './variable.js';

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

export default Library;