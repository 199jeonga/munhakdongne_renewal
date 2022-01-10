{// data 변수
const subNavCode = '../temp/subNavBox.html';

// 선택 변수
const subNavBox = document.querySelector('#subNavBox'); // 선택자오류

  //sub
  fetch(subNavCode)
  .then( response => response.text() )
  .then( data => subNavBox.innerHTML = data )  // 선택자오류
}