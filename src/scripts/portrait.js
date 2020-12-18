function hideShow(e){    //fonction pour affichez/masquez une div

	(e.preventDefault) ? e.preventDefault() : (e.returnValue = false);

	let targetID = (e.target || e.srcElement).getAttribute("data-toShow"),
		elementToShow = document.getElementById(targetID);

	elementToShow.style.height = (elementToShow.offsetHeight == 0 ? elementToShow.scrollHeight : "0") + 'px';

}

let a = document.querySelectorAll("[data-toShow]"),
	x = 0,
	l = a.length

for (; x<l; x++) document.addEventListener ? a[x].addEventListener("click", hideShow, false) : a[x].attachEvent("onclick", hideShow);


///slider Dessin

let current = 0,
    slides = document.getElementsByClassName("img-sketch");

setInterval(function() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);
