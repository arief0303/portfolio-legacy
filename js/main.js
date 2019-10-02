// OVERLAY SCRIPT___________________________________________________________________
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// When the user scrolls down 50px from the top of the document, resize the header's font size
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("title").style.fontSize = "0px";
    document.getElementById("title").style.margin = "50%";
    
  } else {
    document.getElementById("title").style.fontSize = "90px";
  }
}*/