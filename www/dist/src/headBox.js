//headBox.js
(()=>{
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



// js반응형
const elBody = document.querySelector('body');
const setDevice = [ 
  {size:1280, type:'handle',script:'../dist/rwd/headBox_rwd_moblie.js'},
];

const mediaSize = `screen and (max-width:${setDevice[0].size}px)`;
const mediaMatches = window.matchMedia(mediaSize);

const fnMkScript = (data)=>{
  const ckScript = document.querySelector('.navScript');

  if( mediaMatches.matches ){
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src', data);
    mkScript.setAttribute('class', 'navScript');
    elBody.append(mkScript);
  }else{
    ckScript.remove();
  }
  
};
const fnCheckHeader = (type = mediaMatches.matches)=>{
  fetch(setDevice[0].script)
  .then( ()=> { fnMkScript(setDevice[0].script ) })
};
fnCheckHeader();

mediaMatches.addEventListener('change', (e)=>{
  fnCheckHeader(e.matches);
});


})();//즉시실행함수 끝!