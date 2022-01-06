const viewBox = document.querySelector('#viewBox');
const viewIndicator = viewBox.querySelector('.view_indicator');

const stopBtn = viewIndicator.querySelector('.view_stop a');
const indicatorWrap = viewIndicator.querySelector('ul');
const indicatorLi = indicatorWrap.querySelectorAll('li');
const indicatorList = [].slice.call(indicatorLi);  

const viewSlideWrap = viewBox.querySelector('.view_slide_part');
const viewSlideList = viewSlideWrap.querySelectorAll('li');

let SLIDE_COUNT = 0;
const slideLen = indicatorList.length;

//복제
const viewSlideLast = viewSlideList.at(-1);
const viewSlideClone = viewSlideLast.cloneNode(true);
indicatorWrap.prepend(viewSlideClone);

const viewStyle = indicatorWrap.style;
const indicatorLiRe = indicatorWrap.querySelectorAll('li');
const indicatorListRe = [].slice.call(indicatorLiRe);

