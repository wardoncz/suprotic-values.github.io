var navState = false

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
        nav.style.marginLeft = "-50%"
        navState = false
    }
    
}

