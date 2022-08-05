// let menu = document.querySelector('.bars')
//   menu.addEventListener('click', () => {
//     menu.classList.toggle('fa-times')
//   })

// Nav
let menu = document.querySelector('.bars')
let close = document.querySelector('.close')
let nav = document.querySelector('.navbar')

menu.addEventListener('click', () => {
  nav.classList.add('active')
});
close.addEventListener('click', () => {
  nav.classList.remove('active')
});

// Slides
 let slideIndex1 = 0;
 showSlides1();

 function showSlides1() {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex1++;
   if (slideIndex1 > slides.length) {slideIndex1 = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex1-1].style.display = "block";  
   dots[slideIndex1-1].className += " active";
   setTimeout(showSlides1, 2000); // Change image every 2 seconds
 };


// Multiple Slide

let slideIndex = [1,1];
let slideId = ["mySlide1", "mySlide2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "";  
}























