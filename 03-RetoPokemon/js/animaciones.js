var slideIndex=1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function reproducir()			
{ 
  /*var nombre = document.getElementById('nombrePokemon').value;*/
  /*var sonido = 'sounds/'+nombre+'.mp3';*/
  document.getElementById('sonido').play();
}

function detener()
{
  /*var nombre = document.getElementById('nombrePokemon').value;*/
  /*var sonido = 'sounds/'+nombre+'.mp3';*/
  document.getElementById('sonido').pause();
}