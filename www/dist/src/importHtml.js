{
  const wrap = document.querySelector('#wrap');

// data 변수
const headerCode = '../temp/headBox.html';
const footerCode = '../temp/footBox.html';

// 선택 변수
const headBox = document.querySelector('#headBox');
const footBox = document.querySelector('#footBox');

//basic
  fetch(headerCode)
  .then( response => response.text() )
  .then( data => headBox.innerHTML = data )
  .then( ()=>{
    const headerscript = document.createElement('script');
    headerscript.src = "../dist/src/headBox.js";
    wrap.append(headerscript);
  })


  fetch(footerCode)
  .then( response => response.text() )
  .then( data => footBox.innerHTML = data )
}