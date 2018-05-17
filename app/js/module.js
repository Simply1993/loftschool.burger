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

/* Vertical Accordeon */
let verticalAccordeon = (function (options) {
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

	let _openItem = function _openItem(item, contentItem) {
		let contentHeight = _getHeight(contentItem);

		item.classList.toggle(options.activeItemClass);
		contentItem.style.height = contentHeight;
	};

	let _closeItem = function _closeItem(item, contentItem) {
		contentItem.style.height = '';
		item.classList.remove(options.activeItemClass);
	};

	let _closeItems = function _closeItems(items) {
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

verticalAccordeon.init();

/* Horizontal Accordeon */
let horizontalAccordeon = (function (options) {
	let list = document.querySelector(options.listSelector);
	let itemsList = list.querySelectorAll('.menu-accordeon__item');

	/* calculate needed width */
	let userWidth = window.innerWidth;
	let titleItem = list.querySelector('.'+options.linkClass);
	let widthTitle = titleItem.clientWidth;
	let neededWidth = userWidth - itemsList.length * widthTitle;
	console.log(neededWidth);
	neededWidth = (neededWidth > 520) ? 520 : neededWidth;

	let _toogleItems = function (e) {
		e.preventDefault();

		if (e.target.className == options.linkClass) {
			let item = e.target.parentNode;
			let contentItem = item.querySelector('.menu-accordeon__item-content');

			if (!item.classList.contains(options.activeItemClass)) {
				_closeItems(itemsList);
				_openItem(item, contentItem);
			} else {
				_closeItem(item, contentItem);
			}
		}
	};

	let _openItem = function _openItem(item, contentItem) {
		item.classList.toggle(options.activeItemClass);
		contentItem.style.width = neededWidth + 'px';
	};

	let _closeItem = function _closeItem(item, contentItem) {
		contentItem.style.width = '';
		item.classList.remove(options.activeItemClass);
	};

	let _closeItems = function _closeItems(items) {
		for (let i = 0; i < items.length; i++) {
			let contentItem = items[i].querySelector('.menu-accordeon__item-content');
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
	listSelector: ".menu-accordeon__list",
	linkClass: "menu-accordeon__trigger",
	activeItemClass: "menu-accordeon__item--active"
});

horizontalAccordeon.init();