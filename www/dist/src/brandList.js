{
const brandListBox = document.querySelector('#brandlistBox');
const brandlistWrap = brandListBox.querySelector('.brandlist_wrap');
let brandlistPart = brandlistWrap.querySelector('ul');
let brandlistLi = brandlistPart.querySelectorAll('li');

let TIME_OPTION = 1000;

const fnSlide = ()=>{
  let brandlistList = [...brandlistLi];
  brandlistPart.prepend( brandlistList.at(-1) );
  brandlistLi = brandlistPart.querySelectorAll('li');
};

  const fnSlideMove = ()=> {
    slideGo = setInterval( ()=>{
      fnSlide();
    }, TIME_OPTION );
  };
  
  const fnSlidePause = () =>{
    clearInterval(slideGo);
  }

  fnSlideMove(); 
  
  brandListBox.addEventListener('mouseenter', (e) => {
    fnSlidePause();
  });
  
  brandListBox.addEventListener('mouseleave', (e) => {
    fnSlideMove(); 
  });

}