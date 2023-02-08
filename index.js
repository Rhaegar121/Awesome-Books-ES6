import Library from './modules/library.js';
import { DateTime } from './modules/luxon.js';
import {
  form,
  bookList,
  titleInput,
  authorInput,
  addBtn,
  booksListView,
  addNewBookView,
  contactView,
  listbook,
  addbook,
  contactus,
  date,
  hamburger,
  mobileMenu,
  booksListViewMenu,
  addNewBookViewMenu,
  contactViewMenu,
} from './modules/variable.js';

// book list
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

// mobile menu
const menuToggle = () => {
  hamburger.classList.toggle('open');
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
};

hamburger.onclick = () => {
  menuToggle();
};

// changing contents
const booksList = () => {
  booksListView.classList.add('active');
  contactView.classList.remove('active');
  addNewBookView.classList.remove('active');
  listbook.style.display = 'block';
  contactus.style.display = 'none';
  addbook.style.display = 'none';
};

booksListView.onclick = () => {
  booksList();
};

booksListViewMenu.onclick = () => {
  booksList();
  menuToggle();
};

const contact = () => {
  contactView.classList.add('active');
  booksListView.classList.remove('active');
  addNewBookView.classList.remove('active');
  contactus.style.display = 'block';
  addbook.style.display = 'none';
  listbook.style.display = 'none';
};

contactView.onclick = () => {
  contact();
};

contactViewMenu.onclick = () => {
  contact();
  menuToggle();
};

const addNewBook = () => {
  addNewBookView.classList.add('active');
  booksListView.classList.remove('active');
  contactView.classList.remove('active');
  addbook.style.display = 'block';
  contactus.style.display = 'none';
  listbook.style.display = 'none';
};

addNewBookView.onclick = () => {
  addNewBook();
};

addNewBookViewMenu.onclick = () => {
  addNewBook();
  menuToggle();
};

// display date and time
const time = () => {
  const today = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  date.innerText = today;
};
setInterval(time, 1000);
