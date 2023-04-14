const navSlide = () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
    
     // On scroll 
  
window.addEventListener('scroll', (e) => {
  if (window.scrollTop()) {
    $('nav').classList.add("nav-opacity");
  }
  else { 
    $('nav').classList.remove("nav-opacity");
  }
});

    // Toggle Nav
  burger.addEventListener('click', () =>{
    //nav.style.transform = "translateX(0)"
    if(nav.style.display === "flex" ){
    nav.style.display = "none";
    }else{
      nav.style.display = "flex";
    }
    
    nav.style.transition = "all 400ms ease-in-out"
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