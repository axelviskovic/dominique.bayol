let pictures = document.querySelectorAll('.mosaique img')
let attributes = ["images/art0.jpeg", "images/art1.jpeg","images/art2.jpeg","images/art3.jpeg","images/art4.jpeg"]
let num


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
