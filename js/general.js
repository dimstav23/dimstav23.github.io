$(document).ready(function(){ // here so that I know that all the items have been initialised

  // Get the navbar
  var navbar = document.getElementById("navbar");
  var content = document.getElementById("pageContent");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  var navbarHeight = navbar.offsetHeight;
  var moveOrNot = true;

  //for the active highlight
  let mainNavLinks = document.querySelectorAll(".topnav a");
  let mainSections = document.querySelectorAll(".aboutme .education .skills .professionalexperience");
  let lastId;
  let cur = [];


  $(window).on('scroll', function() {
    let fromTop = window.scrollY;
    /**
      active selection
    **/
    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop + navbarHeight  &&
        section.offsetTop + section.offsetHeight >= fromTop + navbarHeight
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
    /**
      sticky navbar
    **/
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      content.classList.add("moveContentDown");
    } else {
      navbar.classList.remove("sticky");
      content.classList.remove("moveContentDown");
    }
  });

  $(mainNavLinks).click(function() {
    //if we try to move to the same hash with the navbar, go again on top
    if (this.hash == window.location.hash){
      moveToSection();
      return false;
    }
    return true;//if you have to move, go to the handler
  });

  $(window).on('hashchange', function() {
    if ( "onhashchange" in window ) {
      moveToSection();
    }
  });

  function moveToSection(){
    var hash = window.location.hash.substring( 1 );
    if ( !hash )
        return;
    var offset = navbarHeight;
    var sel = '[id="' + hash + '"], a[name="' + hash + '"]';
    var currentOffset = $( sel ).offset().top;
    $( window ).scrollTop( currentOffset - offset );
  }

});
