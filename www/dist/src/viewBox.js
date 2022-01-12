{
const viewBox = document.querySelector('#viewBox');

//indicaor
const viewIndicator = viewBox.querySelector('.view_indicator');
const stopBtn = viewIndicator.querySelector('.view_stop a');
const elCount  = viewIndicator.querySelector('.count_part');
const elNowCount = elCount.querySelector('.now_count');
const elTotalCount = elCount.querySelector('.total_count');

//slide
const viewSlideUl = viewBox.querySelector('.view_slide_part');
let viewSlideLi = viewSlideUl.querySelectorAll('li');
const viewLiWidth = viewSlideLi[0].clientWidth;
const viewLiWidthMargin =   viewLiWidth+(viewLiWidth/20);

elTotalCount.innerText = viewSlideLi.length;

let SLIDE_COUNT = 1;
let TIME_OPTION = 2000;

const mediaSize = `screen and (max-width:1279px)`;
const mediaMatches = window.matchMedia(mediaSize);


const fnDelay = async (ms = 0) => {
  return await new Promise(resolve=>{
    setTimeout( ()=> { resolve() }, ms)
  });
};


// 이벤트 함수
let viewSlideList;
const fnSlideNext = async () =>{
    viewSlideList = [...viewSlideLi];
    viewSlideUl.style=`transition:all ${TIME_OPTION}ms linear; margin-left: -${viewLiWidthMargin}px`;
    await fnDelay(TIME_OPTION);
    viewSlideUl.style='margin-left:0; transition:null';
    viewSlideUl.append( viewSlideList[0] );
    viewSlideLi = viewSlideUl.querySelectorAll('li');
    SLIDE_COUNT++;
    fnNowCount();
    if(SLIDE_COUNT >= viewSlideList.length){ SLIDE_COUNT = 0;}
  };
  
  const fnSlideSet = ()=> {
    slideGo = setInterval( ()=>{
      fnSlideNext();
    }, TIME_OPTION*2 );
  };

  const fnNowCount = ()=>{
    elNowCount.innerText = SLIDE_COUNT;
  };
  
  const fnSlidePause = () =>{
    clearInterval(slideGo);
  }

  fnSlideSet();

  // 이벤트
  stopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const ICONTAG = stopBtn.querySelector('i');
    const CK_ICON = ICONTAG.classList.contains('fa-pause');
    if(CK_ICON){
      fnSlidePause();
      stopBtn.innerHTML = '<i class="fas fa-play"><span class="blind">다시 시작</span></i>';
    }else{
      fnSlideSet(); 
      stopBtn.innerHTML = '<i class="fas fa-pause"><span class="blind">일시정지</span></i>';
    }
  });

  mediaMatches.addEventListener('change', ()=>{
    location.reload();
  });

}//viewBox.js