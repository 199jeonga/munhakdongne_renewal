{
  const mdpickBox = document.querySelector('#mdpickBox');
  const mdPickInner = mdpickBox.querySelector('.mdpick_inner');
  
  const newbookBox = document.querySelector('#newbookBox');
  const newbookInner = newbookBox.querySelector('.newbook_inner');

  let TIME_OPTION = 1500; // 0.1초????

  //함수------------------------------------------
  const fnMainSlide = (box, inner)=>{
    
    const _Ul = box.querySelector('.booklist_part');
    let _Li = _Ul.querySelectorAll('li');
    const _StopBtn = box.querySelector('.stop_btn > button');  // 동일 요소중 첫번째만 선택됨..
    const _prevNextBtn = box.querySelector('.prev_next_btn');
    
    // 이벤트 함수
    const fnSlideNext = ()=>{
      let _LiFn = [..._Li];
      const LAST = _LiFn.length-1;
      _Ul.prepend( _LiFn[LAST] );
      _Li = _Ul.querySelectorAll('li');
    };

    const fnSlidePrev = ()=>{
      let _LiFn = [..._Li];
      _Ul.append( _LiFn[1] );
      _Li = _Ul.querySelectorAll('li');
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
    _prevNextBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      let target = (name) => e.target.classList.contains(name);
      (target('next_btn')) ? fnSlidePrev() : fnSlideNext(); 
    });
    

    _StopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const ICONTAG = _StopBtn.querySelector('i');
      console.log(ICONTAG);
      const CK_ICON = ICONTAG.classList.contains('fa-pause');
      if(CK_ICON){
        fnSlidePause();
        _StopBtn.innerHTML = '<i class="fas fa-play"><span class="blind">다시 시작</span></i>';
      }else{
        fnSlideSet(); 
        _StopBtn.innerHTML = '<i class="fas fa-pause"><span class="blind">일시정지</span></i>';
      }
    });
    
    // inner.addEventListener('mouseenter',fnSlidePause);
    // inner.addEventListener('mouseleave',fnSlideSet);
    
  }//fnMainSlide

  fnMainSlide(mdpickBox, mdPickInner);
  fnMainSlide(newbookBox, newbookInner);

}