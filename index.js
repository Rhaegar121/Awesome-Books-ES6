import Library from './modules/library.js';
import { form, bookList, titleInput, authorInput, addBtn, booksListView, addNewBookView, contactView, listbook, addbook, contactus, date } from './modules/variable.js';
import { DateTime } from './modules/luxon.js';

// book list
window.onload = () => {
  let newLibrary = new Library();
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
      let data = e.target;
      newLibrary.removeBook(data);
    }
    window.location.reload();
  });
};

// changing contents
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

// display date and time
const time = () => {
  let today = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  date.innerText = today;
}
setInterval(time, 1000);
