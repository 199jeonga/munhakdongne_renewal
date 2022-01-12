//headBox.js
(()=>{
  const logo = document.querySelector('.logo');
  const elHeadBox = document.querySelector('#headBox');
  const elGnbBox = elHeadBox.querySelector('#gnbBox');

  const elGnbOpenBtn = elHeadBox.querySelector('.gnb_btn');
  const elGnbOpenButton = elGnbOpenBtn.querySelector('button');
  const elGnbClosebtn = elHeadBox.querySelector('#gnb_close');
  const elGnbCloseButton = elGnbClosebtn.querySelector('button');

  const elSearchWrap = document.querySelector('.search_wrapper');
  const elSearchBtn = elSearchWrap.querySelector('.search_btn');
  const elSearchOpenButton = elSearchBtn.querySelector('button');
  const elSearchBox = elSearchWrap.querySelector('.searchBox');
  const elSearchCloseBtn = elSearchWrap.querySelector('#search_close');
  const elSearchCloseButton = elSearchCloseBtn.querySelector('button');
  
  const ACTION = 'action';
  const BLIND = 'blind';


// open, close 버튼
elGnbOpenButton.addEventListener('click', (e)=>{
  e.preventDefault();
  elGnbBox.classList.add(ACTION);
  elGnbCloseButton.focus();
})
elGnbCloseButton.addEventListener('click', (e)=>{
  e.preventDefault();
  elGnbBox.classList.remove(ACTION);
})


elSearchOpenButton.addEventListener('click', (e)=>{
  e.preventDefault();
  elSearchBox.classList.add(ACTION);
  logo.classList.add(BLIND);
  elSearchCloseButton.focus();
})
elSearchCloseButton.addEventListener('click', (e)=>{
  e.preventDefault();
  elSearchBox.classList.remove(ACTION);
  logo.classList.remove(BLIND);
})


//스크롤 내리면 headBox 색상 변환
const elheadBoxH = elHeadBox.offsetTop;

const fnscroll = (e)=>{
  const target = parseInt(e.currentTarget.scrollY);
  if(target > elheadBoxH){
    elHeadBox.style = 'background-color:rgba(255, 255, 255, 0.6); box-shadow: 0px 5px 10px rgba(0,0,0,0.1);'; 
    if( !logo.classList.contains(BLIND) ){
      logo.style = ' background-image: url(../multi/img/logo_main_b.png);'
    }
  }else{
    elHeadBox.style = 'background-color:transparent';
    if( !logo.classList.contains(BLIND) ){
    logo.style = ' background-image: url(../multi/img/logo_main_w.png);'
    }//if
  }//else
}//fnscroll
window.addEventListener( 'scroll', fnscroll);



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