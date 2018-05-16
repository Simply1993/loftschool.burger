/*Hamburger menu*/
let hamburger = (function (options) {
	let button = document.querySelector(options.button);
	let menu = document.querySelector(options.menu);
	let list = document.querySelector(".mobile-menu__list");

	let _openMenu = function (e) {
		e.preventDefault();
		menu.classList.toggle("active");
		document.body.classList.toggle("lock");
	};

	let closeMenu = function closeMenu(e) {
		e.preventDefault();
		if (e.target.className == "mobile-menu__link") {
			menu.classList.remove("active");
			document.body.classList.remove("lock");
		}
	};

	let addListeners = function () {
		button.addEventListener("click", _openMenu);

		list.addEventListener("click", closeMenu);
	};

	return {
		init: addListeners
	};
})({
	button: ".hamburger-menu-btn",
	menu: ".mobile-menu"
});

hamburger.init();