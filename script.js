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
        nav.style.marginLeft = "-50%"
        navState = false
    }
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 300
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
  result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`
}
console.log(result.substring(0, result.length - 1))
stars.style.boxShadow = result.substring(0, result.length - 1)