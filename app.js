const current = document.querySelector('#current')
const imgs = document.querySelectorAll('.imgs img')
const  opacity = 0.6;


// set first image opacitys
imgs[0].style.opacity = opacity;

//below code will allow you to create the img
// const[current, imgs ] = [document.querySelector('#current'), document.querySelectorAll('.imgs img') ];

//
// imgs.forEach(img => img.addEventListener('click', (e) =>
// current.src = e.target.src));


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
//  rest
  imgs.forEach(img => (img.style.opacity = 1));
  // change current image to soruce of clicked images
  current.src = e.target.src;
  //add class
  current.classList.add('fade-in')

  // remove fade in class after .5s
  setTimeout(()=> current.classList.remove('fade-in'), 500);
  // change the opacity to var
  e.target.style.opacity = opacity;
}
