const icon = document.querySelector('.navicon');
    const link = document.querySelector('.nav-top');

    icon.addEventListener('click', ()=>{
       if(link.style.display == 'flex' || link.style.display == '')
        link.style.display = 'none';
       else link.style.display = 'flex'
    })

/*slid*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


