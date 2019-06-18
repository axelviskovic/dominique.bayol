let pictures = document.querySelectorAll('.mosaique img')
let attributes = ["dist/res/images/art0.jpeg", "dist/res/images/art1.jpeg","dist/res/images/art2.jpeg","dist/res/images/art3.jpeg","dist/res/images/art4.jpeg"]
let num


// HAMBURGER

const hamburger = document.querySelector("#hamburger")
const blackHamburger = document.querySelector("#blackHamburger")
const menuHamburger = document.querySelector(".hamburgerMenu")

hamburger.addEventListener(
  "click",
  function(){
    menuHamburger.style.transform="translateX(200px)"
    blackHamburger.style.opacity="1"
  }
)

blackHamburger.addEventListener(
  "click",
  function(){
    blackHamburger.style.opacity="0"
    menuHamburger.style.transform="translateX(0px)"
  }
)

// MOSAÏQUE

  setInterval (function(){
    num = Math.floor(Math.random()*pictures.length)
    pictures[num].style.opacity = 0.5
      pictures[num].setAttribute('src', attributes[Math.floor(Math.random()*attributes.length)]);
    apparition(num)
  },
2000)

function apparition(nombre){
setTimeout(function(){
  pictures[nombre].style.opacity =1
},2000)}
