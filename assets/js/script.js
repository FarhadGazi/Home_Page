
var logo=document.getElementById("logo")
var navbar = document.getElementById("navbar");
let width = window.innerWidth;
if(width>767){
  
    window.onscroll = function() {myFunction(),scrollFunction()};
    
    var sticky = navbar.offsetTop;
    // e.preventDefault();
   
    
    function myFunction(){
        
        if (window.pageYOffset >= sticky) {
            
            navbar.classList.add("sticky")
            logo.style.display="block"
    
          } else {
            navbar.classList.remove("sticky");
            if(width<767){
              logo.style.display="block"
            }else{
              logo.style.display="none"
            }
            
            
          }
    }
} 






// owl carosel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  smartSpeed: 1500,
  autoplayTimeout: 3000,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})





//full screen search bar search js code
var ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null
var touchorclick = (ismobile)? 'touchstart' : 'click'
var searchcontainer = document.getElementById('searchcontainer')
var searchfield = document.getElementById('search-terms')
var searchlabel = document.getElementById('search-label')
 
searchlabel.addEventListener(touchorclick, function(e){ // when user clicks on search label
    searchcontainer.classList.toggle('opensearch') // add or remove 'opensearch' to searchcontainer
    if (!searchcontainer.classList.contains('opensearch')){ // if hiding searchcontainer
        searchfield.blur() // blur search field
        e.preventDefault() // prevent default label behavior of focusing on search field again
    }
    e.stopPropagation() // stop event from bubbling upwards
}, false)
 
searchfield.addEventListener(touchorclick, function(e){ // when user clicks on search field
    e.stopPropagation() // stop event from bubbling upwards
}, false)
 
document.addEventListener(touchorclick, function(e){ // when user clicks anywhere in document
    searchcontainer.classList.remove('opensearch')
    searchfield.blur()
}, false)


// scroll top


   
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // mybutton.style.display = "block";
        $('#myBtn').fadeIn();
      } else {
        $('#myBtn').fadeOut();
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    

}


// navbar toggle

  $(".dropdown-toggle").click(function(e){
      e.preventDefault();
      $(".dropdown-menu").toggle();
  });



