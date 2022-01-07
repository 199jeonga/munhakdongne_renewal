{
  const mdpickBox = document.querySelector('#mdpickBox');
  const mdPickInner = mdpickBox.querySelector('.mdpick_inner');
  const mdPickUl = mdpickBox.querySelector('.mdpick_booklist_part');
  let mdPickLi = mdPickUl.querySelectorAll('li');

  const mdPickStop = mdpickBox.querySelector('.stop_btn > button');
  const prevNextBtn = mdpickBox.querySelector('.prev_next_btn');

  let TIME_OPTION = 1000;

  //이벤트 함수
const fnSlideNext = ()=>{
  let mdPickList = [...mdPickLi];
  mdPickUl.prepend( mdPickList.at(-1) );
  mdPickLi = mdPickUl.querySelectorAll('li');
};

const fnSlidePrev = ()=>{
  let mdPickList = [...mdPickLi];
  mdPickUl.append( mdPickList.at(0) );
  mdPickLi = mdPickUl.querySelectorAll('li');
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
prevNextBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  let target = (name) => e.target.classList.contains(name);
  (target('next_btn')) ? fnSlidePrev() : fnSlideNext(); 
});

mdPickStop.addEventListener('click', (e) => {
  const ICONTAG = mdPickStop.querySelector('i');
  const CK_ICON = ICONTAG.classList.contains('fa-pause');
  if(CK_ICON){
    fnSlidePause();
    mdPickStop.innerHTML = '<i class="fas fa-play"><span class="blind">다시 시작</span></i>';
  }else{
    fnSlideSet(); 
    mdPickStop.innerHTML = '<i class="fas fa-pause"><span class="blind">일시정지</span></i>';
  }
});

mdPickInner.addEventListener('mouseenter', (e) => {
  fnSlidePause();
});

mdPickInner.addEventListener('mouseleave', (e) => {
  fnSlideSet(); 
});


}