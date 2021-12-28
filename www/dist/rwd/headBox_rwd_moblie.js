
  const elHeaderWrap = document.querySelector('.headerWrap');
  const elGnbBox = elHeaderWrap.querySelector('#gnbBox');
  const elGnbInner = elGnbBox.querySelector('.gnb_inner');
  const elGnbInnerLi = elGnbInner.children;
  const elGnbInnerList = [].slice.call(elGnbInnerLi);
  const ACTION = 'action';


  elGnbInnerList.forEach( (data, index)=>{
    const _gnbInnerTitle = data.querySelector('.gnb_inner_title > a');
    
    _gnbInnerTitle.addEventListener('click', (e)=>{
      e.preventDefault();
      for(let i=0; i<4; i++){
        const _gnbInnerContent = elGnbInnerList[i].children[1]; //마지막 인덱스는 다른 방법 사용해야 함
        // const ckClass = _gnbInnerContent.classList.contains(ACTION);
        if(i !== index){
          _gnbInnerContent.classList.remove(ACTION);
        }else{
          _gnbInnerContent.classList.add(ACTION);
        }//if
      }//for
  })
})//forEach
