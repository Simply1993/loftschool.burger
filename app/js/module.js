/* Hamburger menu */
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

/* Horizontal Accordeon */
let horizontalAccordeon = (function (options) {
	let list = document.querySelector(options.listSelector);
	let itemsList = list.querySelectorAll('.accordeon__item');

	let _getHeight = function _getHeight(elem) {
		let height = elem.scrollHeight + 'px';
		return height;
	};

	let _toogleItems = function (e) {
		e.preventDefault();

		if (e.target.className == options.linkClass) {
			let item = e.target.parentNode;
			let contentItem = item.querySelector('.accordeon__item-content');

			if (!item.classList.contains(options.activeItemClass)) {
				_closeItems(itemsList);
				_openItem(item, contentItem);
			} else {
				_closeItem(item, contentItem);
			}
		}
	};

	_openItem = function _openItemNew(item, contentItem) {
		let contentHeight = _getHeight(contentItem);

		item.classList.toggle(options.activeItemClass);
		contentItem.style.height = contentHeight;
	};

	_closeItem = function _closeItem(item, contentItem) {
		contentItem.style.height = '';
		item.classList.remove(options.activeItemClass);
	};

	_closeItems = function _closeItems(items) {
		for (let i = 0; i < items.length; i++) {
			let contentItem = items[i].querySelector('.accordeon__item-content');
			_closeItem(items[i], contentItem);
		}
	};

	let addListeners = function () {
		list.addEventListener('click', _toogleItems)
	};

	return {
		init: addListeners
	}
})({
	listSelector: ".accordeon__list",
	linkClass: "accordeon__trigger",
	activeItemClass: "accordeon__item--active",
});

horizontalAccordeon.init();