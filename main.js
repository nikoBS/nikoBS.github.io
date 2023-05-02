let hamburger = document.querySelector('.hamburger');
let intro = document.querySelector('.intro');
let header = document.querySelector('header');
let links = document.querySelector('.links');
let isOpen = false;

hamburger.addEventListener('click', ()=>{
  if (!isOpen) {
    isOpen = !isOpen;
    intro.style['margin-top'] = '20rem';
    header.style.height = `calc(${header.clientHeight}px + 20rem)`
    links.style.display = 'flex';
    let height = links.clientHeight;
    links.style['padding-top'] = `calc(3rem + ${2 * height}px)`
  } else {    
    isOpen = !isOpen;
    header.style.height = `calc(${header.clientHeight}px - 20rem)`
    intro.style['margin-top'] = '0';
    links.style['padding-top'] = '0';
    links.style.display = 'none';
  }
})