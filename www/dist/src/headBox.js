//headBox.js

const elHeaderWrap = document.querySelector('.headerWrap');
const elGnbBox = elHeaderWrap.querySelector('#gnbBox');

const elGnbOpenBtn = elHeaderWrap.querySelector('.gnb_btn');
const elGnbOpenButton = elGnbOpenBtn.querySelector('button');

const elGnbClosebtn = elHeaderWrap.querySelector('#gnb_close');
const elGnbCloseButton = elGnbClosebtn.querySelector('button');


const elSearchWrap = document.querySelector('.search_wrapper');
const elSearchBtn = elSearchWrap.querySelector('.search_btn');
const elSearchOpenButton = elSearchBtn.querySelector('button');
const elSearchBox = elSearchWrap.querySelector('.searchBox');

const elSearchCloseBtn = elSearchWrap.querySelector('#search_close');
const elSearchCloseButton = elSearchCloseBtn.querySelector('button');



elGnbOpenButton.addEventListener('click', (e)=>{
  e.preventDefault();
  elGnbBox.style = 'display:block';
  elGnbCloseButton.focus();
})
elGnbCloseButton.addEventListener('click', (e)=>{
  e.preventDefault();
  elGnbBox.style = 'display:none';
})


elSearchOpenButton.addEventListener('click', (e)=>{
  e.preventDefault();
  elSearchBox.style = 'display:block';
  elSearchCloseButton.focus();
})
elSearchCloseButton.addEventListener('click', (e)=>{
  e.preventDefault();
  elSearchBox.style = 'display:none';
})