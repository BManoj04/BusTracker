const navSlide = () => {

  const burger = document.querySelector('.burger');
  console.log(burger)
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
    
     // On scroll 
  $(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('nav-opacity');
  }
  else { 
    $('nav').removeClass('nav-opacity');
  }
});
  
    // Toggle Nav
  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-activ');
   
    // Anime Links
  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
    }
  });
    
    // Burger Animation
    burger.classList.toggle('toggle') 
});
  
}

navSlide();