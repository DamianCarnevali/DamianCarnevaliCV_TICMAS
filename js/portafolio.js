(function ($) {
  'use strict';

  //* Navbar Fixed
  const header = document.querySelector('.header');
  const logo = document.querySelector('.logo-principal');
  const mediaQuery = window.matchMedia('(max-width: 992px)');

  function agregarClase() {
    header.classList.add('.navbar_fixed');
    logo.src = './img/logo2.png';
  }
  function removerClase() {
    header.classList.remove('.navbar_fixed');
    logo.src = './img/logo.png';
  }
  window.addEventListener('resize', function () {
    if (this.window.innerWidth < 992) {
      agregarClase();
    } else {
      removerClase();
    }
  });

  if (mediaQuery.matches) {
    logo.src = './img/logo2.png';
  } else {
    logo.src = './img/logo.png';
  }

  function servicios_slider() {
    if ($('.servicio_slider').length) {
      $('.servicio_slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        autoplay: true,
        smartSpeed: 2500,
        dots: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          991: {
            items: 2,
          },
        },
      });
    }
  }
  servicios_slider();

  $(window).on('load', function () {
    $('.educacion-filter ul li').on('click', function () {
      $('.educacion-filter ul li').removeClass('active');
      $(this).addClass('active');

      var data = $(this).attr('data-filter');
      $workGrid.isotope({
        filter: data,
      });
    });

    if (document.getElementById('educacionf')) {
      var $workGrid = $('.educaciong').isotope({
        itemSelector: '.all',
        percentPosition: true,
        masonry: {
          columnWidth: '.all',
        },
      });
    }
  });

  // Formulario de contacto
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    let valid = true;
    const fields = ['nombre', 'email', 'asunto', 'mensaje'];
    fields.forEach(function (field) {
      const value = document.getElementsByName(field)[0].value.trim();
      if (!value) {
        valid = false;
        alert('Por favor, complete el campo: ' + field);
      }
    });

    const email = document.getElementsByName('email')[0].value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      valid = false;
      alert('Por favor, ingrese un correo electrónico válido.');
    }

    if (!valid) {
      event.preventDefault();
    }
  });
})(jQuery);
