//OFF-CANVAS MENU_______________________________________________________________________
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0%";
}

//hamburger menu
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  if (hamburger.className == "hamburger hamburger--collapse is-active") {
    openNav();
  } else {
    closeNav();
  }
});

var curScroll = 0;

function controlScroll (e) {
    var evt = window.event || e;
    var delta = evt.detail? evt.detail*(-120) : evt.wheelDelta;
    if(delta < 0) {
        //scroll down
        curScroll += 25;
    }
    else {
        //scroll up
        curScroll -= 25;
    }
    document.getElementById('content').scrollTop = curScroll;
    console.log(document.getElementById('content').scrollTop);
    
}; 

if (document.attachEvent) {//if IE (and Opera depending on user setting)
    document.attachEvent("onmousewheel", controlScroll)
        
}
else if (document.addEventListener) { //WC3 browsers
    document.addEventListener("mousewheel", controlScroll, false)
}

/*var curScroll = 0;

$(window).on('mousewheel DOMMouseScroll', 'body', function(e){
    var evt = window.event || e;
    var delta = evt.detail? evt.detail*(-120) : evt.wheelDelta;
    var loc = $('#content').scrollTop() + $('#content').innerHeight();
    var height = $('#content')[0].scrollHeight - 10;
    var height2 = $('#content')[0].scrollHeight - $('#content').innerHeight();
    if(delta < 0) {
        //scroll down
        if (curScroll < height2) {
            curScroll += 10;
        }
    }
    else {
        //scroll up
        if (curScroll > 0) {
            curScroll -= 10;
        }
    }
    if (loc >= height && !$('#content').hasClass('appended')) {
        var moreContent ='<a href="google.com">a link</a>';
        $('#content').append(moreContent);
        $('#content').addClass('appended');
        console.log('appended');
    }
    $('#content').scrollTop(curScroll);
    return true;
}); */

var curScroll = 0;

$(window).bind('mousewheel DOMMouseScroll', function(e){
    var evt = window.event || e;
    var delta = evt.detail? evt.detail*(-120) : evt.wheelDelta;
    if(delta < 0) {
        //scroll down
        curScroll += 20;
    }
    else {
        //scroll up
        curScroll -= 20;
    }
    $('#content').scrollTop(curScroll);
    return true;
}); 