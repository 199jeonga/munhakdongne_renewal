{// data 변수
const subBookListCode = '../temp/subBookconList.html';


// 선택 변수
const subBookConInner = document.querySelector('#bookConBox > .bookcon_inner'); // 선택자오류

fetch(subBookListCode)
.then( response => response.text() )
.then( data => subBookConInner.innerHTML = data ) // // 선택자오류
}