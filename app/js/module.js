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
// let verticalAccordeon = (function (options) {
// 	let list = document.querySelector(options.listSelector);
// 	let itemsList = list.querySelectorAll('.accordeon__item');
//
// 	let _getHeight = function _getHeight(elem) {
// 		let height = elem.scrollHeight + 'px';
// 		return height;
// 	};
//
// 	let _toogleItems = function (e) {
// 		e.preventDefault();
//
// 		if (e.target.className == options.linkClass) {
// 			let item = e.target.parentNode;
// 			let contentItem = item.querySelector('.accordeon__item-content');
//
// 			if (!item.classList.contains(options.activeItemClass)) {
// 				_closeItems(itemsList);
// 				_openItem(item, contentItem);
// 			} else {
// 				_closeItem(item, contentItem);
// 			}
// 		}
// 	};
//
// 	let _openItem = function _openItem(item, contentItem) {
// 		let contentHeight = _getHeight(contentItem);
//
// 		item.classList.toggle(options.activeItemClass);
// 		contentItem.style.height = contentHeight;
// 	};
//
// 	let _closeItem = function _closeItem(item, contentItem) {
// 		contentItem.style.height = '';
// 		item.classList.remove(options.activeItemClass);
// 	};
//
// 	let _closeItems = function _closeItems(items) {
// 		for (let i = 0; i < items.length; i++) {
// 			let contentItem = items[i].querySelector('.accordeon__item-content');
// 			_closeItem(items[i], contentItem);
// 		}
// 	};
//
// 	let addListeners = function () {
// 		list.addEventListener('click', _toogleItems)
// 	};
//
// 	return {
// 		init: addListeners
// 	}
// })({
// 	listSelector: ".accordeon__list",
// 	linkClass: "accordeon__trigger",
// 	activeItemClass: "accordeon__item--active",
// });
//
// verticalAccordeon.init();

/* Horizontal Accordeon */
// let horizontalAccordeon = (function (options) {
// 	let list = document.querySelector('.'+options.list);
// 	let itemsList = list.querySelectorAll('.'+options.item);
//
// 	/* calculate needed width */
// 	let userWidth = window.innerWidth;
// 	let titleItem = list.querySelector('.'+options.link);
// 	let widthTitle = titleItem.clientWidth;
// 	let neededWidth = userWidth - itemsList.length * widthTitle;
// 	console.log(neededWidth);
// 	neededWidth = (neededWidth > 520) ? 520 : neededWidth;
//
// 	let _toogleItems = function (e) {
// 		e.preventDefault();
//
// 		if (e.target.className == options.link) {
// 			let item = e.target.parentNode;
// 			let contentItem = item.querySelector('.'+options.content);
//
// 			if (!item.classList.contains(options.activeItem)) {
// 				_closeItems(itemsList);
// 				_openItem(item, contentItem);
// 			} else {
// 				_closeItem(item, contentItem);
// 			}
// 		}
// 	};
//
// 	let _openItem = function _openItem(item, contentItem) {
// 		item.classList.toggle(options.activeItem);
// 		contentItem.style.width = neededWidth + 'px';
// 	};
//
// 	let _closeItem = function _closeItem(item, contentItem) {
// 		contentItem.style.width = '';
// 		item.classList.remove(options.activeItem);
// 	};
//
// 	let _closeItems = function _closeItems(items) {
// 		for (let i = 0; i < items.length; i++) {
// 			let contentItem = items[i].querySelector('.'+options.content);
// 			_closeItem(items[i], contentItem);
// 		}
// 	};
//
// 	let addListeners = function () {
// 		list.addEventListener('click', _toogleItems)
// 	};
//
// 	return {
// 		init: addListeners
// 	}
// })({
// 	list: "menu-accordeon__list",
// 	item: "menu-accordeon__item",
// 	activeItem: "menu-accordeon__item--active",
// 	link: "menu-accordeon__trigger",
// 	content: "menu-accordeon__item-content"
// });
//
// horizontalAccordeon.init();

/* Multi-accordeon */
let multiAcco = function (options) {
	let list = document.querySelector('.'+options.list);
	let itemsList = list.querySelectorAll('.'+options.item);

	if (options.direction == "horizontal") {
		/* for calculate needed width */
		let userWidth = window.innerWidth;
		let titleItem = list.querySelector('.'+options.link);
		let widthTitle = titleItem.clientWidth;
		var neededWidth = userWidth - itemsList.length * widthTitle;
		neededWidth = (neededWidth > 520) ? '520px' : neededWidth + 'px';
	} else if (options.direction == "vertical") {
		/* for calculate needed height */
		var _getHeight = function(elem) {
			let height = elem.scrollHeight + 'px';
			return height;
		};
	}

	let _toogleItems = function (e) {
		e.preventDefault();

		if (e.target.className == options.link) {
			let item = e.target.parentNode;
			let contentItem = item.querySelector('.'+options.content);

			if (!item.classList.contains(options.activeItem)) {
				_closeItems(itemsList);
				_openItem(item, contentItem);
			} else {
				_closeItem(item, contentItem);
			}
		}
	};

	let _openItem = function(item, contentItem) {
		if (options.direction == "horizontal") {
			contentItem.style.width = neededWidth;
		} else if (options.direction == "vertical") {
			let contentHeight = _getHeight(contentItem);
			contentItem.style.height = contentHeight;
		}
		item.classList.toggle(options.activeItem);
	};

	let _closeItem = function(item, contentItem) {
		if (options.direction == "horizontal") {
			contentItem.style.width = '';
		} else if (options.direction == "vertical") {
			contentItem.style.height = '';
		}

		item.classList.remove(options.activeItem);
	};

	let _closeItems = function(items) {
		for (let i = 0; i < items.length; i++) {
			let contentItem = items[i].querySelector('.'+options.content);
			_closeItem(items[i], contentItem);
		}
	};

	let addListeners = function () {
		list.addEventListener('click', _toogleItems)
	};

	return {
		init: addListeners
	}
};

multiAcco({
	direction: "horizontal",
	list: "menu-accordeon__list",
	item: "menu-accordeon__item",
	activeItem: "menu-accordeon__item--active",
	link: "menu-accordeon__trigger",
	content: "menu-accordeon__item-content"
}).init();

multiAcco({
	direction: "vertical",
	list: "accordeon__list",
	item: "accordeon__item",
	activeItem: "accordeon__item--active",
	link: "accordeon__trigger",
	content: "accordeon__item-content"
}).init();