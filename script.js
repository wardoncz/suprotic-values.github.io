var navState = false
var stars = document.getElementById('stars')


function navClick(){
    var navIcon = document.getElementById('nav-icon');
    var navIconFir = document.getElementById('navFir')
    var navIconSec = document.getElementById('navSec')
    var navIconLas = document.getElementById('navLas')
    var nav = document.getElementById('nav')

    if (navState == false){
        nav.style.marginLeft = "0"
        navState = true
    } else  {
        nav.style.marginLeft = "-100%"
        navState = false
    }
}

document.addEventListener("DOMContentLoaded", function() {
  var nav = document.getElementById('nav')

  window.onscroll = function() {
      if (window.scrollY > 1) {
          nav.style.marginLeft = '-100%'
      }
  };
});