
// data 변수
const headerCode = '../temp/headBox.html';
const footerCode = '../temp/footBox.html';


// 선택 변수
const headBox = document.querySelector('#headBox');
const foorBox = document.querySelector('#footBox');


//함수
const fnFetch = (dataCode, selector)=>{
  fetch(dataCode)
  .then( response => response.text() )
  .then( data => selector.innerHTML = data );
};

fnFetch(headerCode, headBox);
fnFetch(footerCode, foorBox);