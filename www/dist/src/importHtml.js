const wrap = document.querySelector('#wrap');

// data 변수
const headerCode = '../temp/headBox.html';
const footerCode = '../temp/footBox.html';
const subNavCode = '../temp/subNavBox.html';
const subBookListCode = '../temp/subBookconList.html';


// 선택 변수
const headBox = document.querySelector('#headBox');
const footBox = document.querySelector('#footBox');
const subNavBox = document.querySelector('#subNavBox'); // 선택자오류
const subBookConInner = document.querySelector('#bookConBox > .bookcon_inner'); // 선택자오류


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


  //sub
  // fetch(subNavCode)
  // .then( response => response.text() )
  // .then( data => subNavBox.innerHTML = data )  // // 선택자오류

  // fetch(subBookListCode)
  // .then( response => response.text() )
  // .then( data => subBookConInner.innerHTML = data ) // // 선택자오류