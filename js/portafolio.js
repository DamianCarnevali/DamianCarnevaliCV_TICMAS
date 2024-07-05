(function ($) {
  ('use strict');
  //* Navbar Fixed y me cambio la imagen de Damián Carnevali de fondo blanco a fondo negro.
  const header = document.querySelector('.header');
  const logo = document.querySelector('.logo-principal');
  const mediaQuery = window.matchMedia('(max-width: 992px)');
  function agregarClase() {
    header.classList.add('navbar_fixed');
    logo.src = './img/logo2.png';
  }
  function removerClase() {
    header.classList.remove('navbar_fixed');
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

  //Slider en tipos de servicios que ofrezco
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

  //Filtrado dinámico en mis estudios
  $(window).on('load', function () {
    if (document.getElementById('educacionf')) {
      var $workGrid = $('.educaciong').isotope({
        itemSelector: '.all',
        percentPosition: true,
        masonry: {
          columnWidth: '.all',
        },
      });

      $('.educacion-filter ul li').on('click', function () {
        $('.educacion-filter ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $workGrid.isotope({
          filter: data,
        });
      });
    }
  });

  //Slider de mis datos cargados en Experiencia
  function experiencia_slider() {
    if ($('.experiencia_slider').length) {
      $('.experiencia_slider').owlCarousel({
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
  experiencia_slider();

  // Formulario de contacto
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); //Previene la acción por defecto de enviar el formulario
    let valid = true;
    let errorMessage = '';
    const fields = ['nombre', 'email', 'asunto', 'mensaje'];

    fields.forEach(function (field) {
      const value = document.getElementsByName(field)[0].value.trim();
      if (!value) {
        valid = false;
        errorMessage += 'Por favor, complete el campo: ' + field + '\n';
      }
    });

    const email = document.getElementsByName('email')[0].value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      valid = false;
      errorMessage += 'Por favor, ingrese un correo electrónico válido.\n';
    }

    if (!valid) {
      alert(errorMessage);
      event.preventDefault();
    } else {
      errorMessage += 'Muchas gracias. Su mensaje ha sido enviado. \n';
      this.reset();
      alert(errorMessage);
    }
  });
  // Valida el mail al salir del input
  document.getElementsByName('email')[0].addEventListener('blur', function () {
    const email = this.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      this.setCustomValidity(''); // Elimina toda alerta anterior
    } else {
      this.setCustomValidity('Por favor, ingrese un correo electrónico válido.');
    }
  });
})(jQuery);
