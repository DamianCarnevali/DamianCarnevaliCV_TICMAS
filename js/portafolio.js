(function ($) {
	'use strict';

	//* Navbar Fixed
	const header = document.querySelector('.header');
	const logo = document.querySelector('.logo-principal');

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

})(jQuery);
