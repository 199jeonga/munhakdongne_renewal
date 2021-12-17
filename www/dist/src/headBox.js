//headBox.js
// (()=>{
// })();//즉시실행함수 끝!
  const elHeaderWrap = document.querySelector('.headerWrap');
  const elGnbBox = elHeaderWrap.querySelector('#gnbBox');
  const elGnbInner = elGnbBox.querySelector('.gnb_inner');
  const elGnbInnerLi = elGnbInner.children;
  const elGnbInnerList = [].slice.call(elGnbInnerLi);

  
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


const ACTION = 'action';


// open, close 버튼

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

const silbling = (selector, idx)=>{
  const _array = [];
  selector.forEach( (data, i)=>{
    if(idx !== i){ _array.push(data); }
  })
  return _array;
}


let IDX = 0;
elGnbInnerList.forEach( (data, index)=>{
  const _gnbInnerTitle = data.querySelector('.gnb_inner_title > a');
  const _gnbInnerContent = data.querySelector('.gnb_inner_con');

  _gnbInnerTitle.addEventListener('click', (e)=>{
    e.preventDefault();

    if(index !== IDX){
      _gnbInnerContent.classList.remove(ACTION);
      silbling(elGnbInnerList, )
    }
      IDX = index;
      _gnbInnerContent.classList.add(ACTION);

  })
});


