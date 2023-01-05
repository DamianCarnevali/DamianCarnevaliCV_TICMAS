(function ($) {
	'use strict';

	//* Navbar Fixed
	const header = document.querySelector('.header');
	const logo = document.querySelector('.logo-principal');
	const mediaQuery = window.matchMedia('(max-width: 200px)');

	function agregarClase() {
		header.classList.add('.navbar_fixed');
		logo.src = './img/logo2.png';
	}
	function removerClase() {
		header.classList.remove('.navbar_fixed');
		logo.src = './img/logo.png';
	}
	window.addEventListener('resize', function () {
		if (this.window.innerWidth < 991) {
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

})(jQuery);
