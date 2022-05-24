const hamburgerMenu = document.querySelector('.ham-menu');
const mobileHeaderBtns = document.querySelector('.header-btns-mobile');


hamburgerMenu.addEventListener('click', () => {
  if(mobileHeaderBtns.style.display === 'flex') {
    mobileHeaderBtns.style.display = 'none'
  } else {
    mobileHeaderBtns.style.display = 'flex';
    mobileHeaderBtns.style.flexFlow = 'column wrap';
    mobileHeaderBtns.style.justifyContent = 'center';
    mobileHeaderBtns.style.alignItems = 'center';
    mobileHeaderBtns.style.background = 'white';
  }
});

window.addEventListener('resize', () => {
  if(window.screen.width >= 1000) {
    mobileHeaderBtns.style.display = 'none'
  }
})
