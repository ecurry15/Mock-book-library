let myLibrary = [];



//Dom Elements ----//
const createNewCard = document.querySelector('.createNew-window');
const checkBox = document.getElementById('checkBox');
const submitNew = document.querySelector('.submitNew');
const totalBookNum = document.getElementById('totalBookNum');
const bookReadNum = document.getElementById('bookReadNum');
const addNew = document.querySelector('.addNew');
const darkWrap = document.querySelector('.darkWrap');


let bookMakerIsOpen = false;

addNew.addEventListener('click', function() {
  createNewCard.removeAttribute('id');
  darkWrap.removeAttribute('id');
})

darkWrap.addEventListener('click', function() {
 createNewCard.id = 'createNew-closed';
 darkWrap.id = 'darkWrapOff';
})

submitNew.addEventListener('click', function() {
  createNewCard.id = 'createNew-closed';
  darkWrap.id = 'darkWrapOff';
})