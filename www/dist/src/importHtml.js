const wrap = document.querySelector('#wrap');

// data 변수
const headerCode = '../temp/headBox.html';
const footerCode = '../temp/footBox.html';


// 선택 변수
const headBox = document.querySelector('#headBox');
const foorBox = document.querySelector('#footBox');


//함수
// const fnCreatEl = (elName,jsUrl)=>{
//   if(!!elName){
//     const script = document.createElement(elName);
//     script.src = jsUrl;
//     wrap.append(script);
//   }
// }

// const fnFetch = (dataCode, selector, elName, jsUrl)=>{
//   fetch(dataCode)
//   .then( response => response.text() )
//   .then( data => selector.innerHTML = data );
//   // .then( fnCreatEl() );
// };

// fnFetch(headerCode, headBox);
// fnFetch(footerCode, foorBox);



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
  .then( data => foorBox.innerHTML = data )
