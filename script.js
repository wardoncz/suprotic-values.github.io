var navState = false
var valuesBox = document.getElementById('values-box')
valuesBox.style.opacity = '0'
valuesBox.style.marginTop = '-150%'

function navClick(){
    var navIcon = document.getElementById('nav-icon');
    var navIconFir = document.getElementById('navFir')
    var navIconSec = document.getElementById('navSec')
    var navIconLas = document.getElementById('navLas')
    var nav = document.getElementById('nav')
    var homeBg = document.getElementById('home')

    if (navState == false){
        nav.style.marginLeft = "0"
        homeBg.style.filter = ''
        navState = true
    } else  {
        nav.style.marginLeft = "-50%"
        navState = false
    }
    
}

var valuesState = false

function valuesClick(){
    var vluesBtn = document.getElementById('values-btn-arrow')

    if (valuesState == false){
        valuesBox.style.opacity = '100%'
        valuesBox.style.marginTop = '0'
        vluesBtn.style.transform = 'rotate(180deg)'
        vluesBtn.style.padding = '0 20px 5px 0' 
        valuesState = true
    } else  {
        valuesBox.style.opacity = '0'
        valuesBox.style.marginTop = '-150%'
        vluesBtn.style.transform = 'rotate(0)'
        vluesBtn.style.padding = '5px 0 0 20px' 
        valuesState = false
    }
}
