{
const viewBox = document.querySelector('#viewBox');
const viewIndicator = viewBox.querySelector('.view_indicator');

const stopBtn = viewIndicator.querySelector('.view_stop a');

const indicatorUl = viewIndicator.querySelector('ul');
const indicatorLi = indicatorUl.querySelectorAll('li');
const indicatorList = [...indicatorLi];

const viewSlideUl = viewBox.querySelector('.view_slide_part');
let viewSlideLi = viewSlideUl.querySelectorAll('li');

let SLIDE_COUNT = 0;
let TIME_OPTION = 1500;
let PERMISSION = true;


// 이벤트 함수
const fnSlideNext = ()=>{
    let viewSlideList = [...viewSlideLi];
    viewSlideUl.style='margin-left: -420px';
    const LAST = viewSlideList.length-1;
    viewSlideUl.prepend( viewSlideList[LAST] );
    viewSlideLi = viewSlideUl.querySelectorAll('li');
    if(SLIDE_COUNT < LAST){
      SLIDE_COUNT++;
      console.log(SLIDE_COUNT);
    }else{
      SLIDE_COUNT = 0;
      viewSlideUl.style='margin-left: 0; transition:none';
    }

  };
  
  const fnSlideSet = ()=> {
    slideGo = setInterval( ()=>{
      fnSlideNext();
    }, TIME_OPTION );
  };
  
  const fnSlidePause = () =>{
    clearInterval(slideGo);
  }

  fnSlideSet();

  // 이벤트
  // _StopBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const ICONTAG = _StopBtn.querySelector('i');
  //   const CK_ICON = ICONTAG.classList.contains('fa-pause');
  //   if(CK_ICON){
  //     fnSlidePause();
  //     _StopBtn.innerHTML = '<i class="fas fa-play"><span class="blind">다시 시작</span></i>';
  //   }else{
  //     fnSlideSet(); 
  //     _StopBtn.innerHTML = '<i class="fas fa-pause"><span class="blind">일시정지</span></i>';
  //   }
  // });

}//viewBox.js