//subBrandList
{

  const brandListBox = document.querySelector('#brandlistBox');
  const brandListLogoArea = brandListBox.querySelector('ul');
  const brandList = brandListLogoArea.children;
  const brandListArr = [...brandList];
  
  
  const fnModal = (e)=>{
    e.preventDefault();
    const modalArea = brandListBox.querySelector('.modal_area');
    modalArea.classList.add('action');
    const closeBtn = brandListBox.querySelector('.closeBtn');
    closeBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      modalArea.classList.remove('action');
    });
    closeBtn.focus();
  }
  
  brandListArr.forEach( (el, i)=>{
    const brandListA = el.children[0];
    brandListA.addEventListener('click',fnModal);
  })
  
}