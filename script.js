let myLibrary = [];

function Books(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
}

let checkBoxClicked = false;
let bookTally = 0;
let readBookTally = 0;

//Dom Elements ----//
const createNewCard = document.querySelector('.createNew-window');
const checkBox = document.getElementById('checkBox');
const submitNew = document.querySelector('.submitNew');
const totalBookNum = document.getElementById('totalBookNum');
const bookReadNum = document.getElementById('bookReadNum');
const addNew = document.querySelector('.addNew');
const darkWrap = document.querySelector('.darkWrap');
const mainContent = document.querySelector('.mainContent');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const test = document.getElementById('test');
const removeButton = document.getElementById('remove');
let bookPositions = [];

let createNewBook = function() {
  for (let i = bookPositions.length - 1; i < bookPositions.length; i++) {
    bookPositions[i] = new Books(title.value, author.value, pages.value, checkBoxClicked);
    myLibrary.push(bookPositions[i]);
  }
  }

  addBookToLibrary = function(){
    /*Loops thru myLibrary and displays it */
    //test.textContent = myLibrary[myLibrary.length - 1].title;//

    //div --- //
  const card = document.createElement('div');
  card.className = "bookCards";
  mainContent.appendChild(card);
  // Book Title --//
  const bookTitle = document.createElement('h1');
  bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
  card.appendChild(bookTitle);

  // Author ---//
  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
  card.appendChild(bookAuthor);

  //Pages ---//
  const bookPages = document.createElement('p');
  bookPages.textContent = myLibrary[myLibrary.length - 1].pages + " Pages";
  card.appendChild(bookPages);

  //Read Status -- //
const readStatus = document.createElement('p');
if (myLibrary[myLibrary.length - 1].read == false) {
  readStatus.textContent = "Not Read";
  readStatus.id = "bookNotRead";
} else {
  readStatus.textContent = "Completed";
  readStatus.id = "bookRead";
}
card.appendChild(readStatus);

//Remove Button --- //
const newRemoveButtons = document.createElement('button');
newRemoveButtons.id = "remove";
newRemoveButtons.textContent = "Remove";
newRemoveButtons.setAttribute('data-bookCard', `${myLibrary.length - 1}`);
card.appendChild(newRemoveButtons);
  }


addNew.addEventListener('click', function() {
  createNewCard.removeAttribute('id');
  darkWrap.removeAttribute('id');
  title.value = "";
author.value = "";
pages.value = "";
})

darkWrap.addEventListener('click', function() {
 createNewCard.id = 'createNew-closed';
 darkWrap.id = 'darkWrapOff';
})

checkBox.addEventListener('click', function() {
!checkBoxClicked ? checkBoxClicked = true : checkBoxClicked = false;
console.log(checkBoxClicked);
});


submitNew.addEventListener('click', function() {
  if (title.value == "" || author.value == "" || pages.value == "") {

  } else {
    createNewCard.id = 'createNew-closed';
    darkWrap.id = 'darkWrapOff';
    createNewBook();
    addBookToLibrary();
  bookTally += 1;
  totalBookNum.textContent = bookTally;
  if(checkBoxClicked) {
    readBookTally += 1;
    bookReadNum.textContent = readBookTally;
  }
}
})

document.addEventListener('click', function(e) {
if(e.target && e.target.id === 'remove') {
  if (myLibrary[e.target.dataset.bookcard].read) {
    readBookTally -= 1;
    bookReadNum.textContent = readBookTally;
    bookTally -= 1;
  totalBookNum.textContent = bookTally;
  } else if (!myLibrary[e.target.dataset.bookcard].read) {
    bookTally -= 1;
  totalBookNum.textContent = bookTally;
  }
  e.target.closest('div').remove();
}
});