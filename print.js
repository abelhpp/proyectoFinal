var btn = document.querySelector("button");
btn.onclick = () => {
    window.print();
}

$(document).ready(function() {
    // Mostrar u ocultar el botón de "ir arriba"
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });
  
    // Desplazarse hacia arriba al hacer clic en el botón
    $('.back-to-top').click(function() {
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
  });