/* Hamburger menu */
let hamburger = options => {
	let button = document.querySelector(options.button);
	let menu = document.querySelector(options.menu);
	let list = document.querySelector(".mobile-menu__list");

	let _openMenu = e => {
		e.preventDefault();

		menu.classList.toggle("active");
		document.body.classList.toggle("lock");
	};

	let _closeMenu = e => {
		e.preventDefault();

		if (e.target.className == "mobile-menu__link") {
			menu.classList.remove("active");
			document.body.classList.remove("lock");
		}
	};

	let addListeners = () => {
		button.addEventListener("click", _openMenu);
		list.addEventListener("click", _closeMenu);
	};

	return {
		init: addListeners
	};
};

hamburger({
	button: ".hamburger-menu-btn",
	menu: ".mobile-menu"
}).init();

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
let multiAcco = options => {
	let list = document.querySelector('.' + options.list);
	let itemsList = list.querySelectorAll('.' + options.item);

	if (options.direction == "horizontal") {
		/* for calculate needed width */
		let userWidth = window.innerWidth;
		let titleItem = list.querySelector('.' + options.link);
		let widthTitle = titleItem.clientWidth;
		var neededWidth = userWidth - itemsList.length * widthTitle;
		neededWidth = (neededWidth > 520) ? '520px' : neededWidth + 'px';
	} else if (options.direction == "vertical") {
		/* for calculate needed height */
		var _getHeight = elem => elem.scrollHeight + 'px';
	}

	let _toogleItems = e => {
		e.preventDefault();

		if (e.target.className == options.link) {
			let item = e.target.parentNode;
			let contentItem = item.querySelector('.' + options.content);

			if (!item.classList.contains(options.activeItem)) {
				_closeItems(itemsList);
				_openItem(item, contentItem);
			} else {
				_closeItem(item, contentItem);
			}
		}
	};

	let _openItem = (item, contentItem) => {
		if (options.direction == "horizontal") {
			contentItem.style.width = neededWidth;
		} else if (options.direction == "vertical") {
			let contentHeight = _getHeight(contentItem);
			contentItem.style.height = contentHeight;
		}
		item.classList.toggle(options.activeItem);
	};

	let _closeItem = (item, contentItem) => {
		if (options.direction == "horizontal") {
			contentItem.style.width = '';
		} else if (options.direction == "vertical") {
			contentItem.style.height = '';
		}

		item.classList.remove(options.activeItem);
	};

	let _closeItems = items => {
		for (let i = 0; i < items.length; i++) {
			let contentItem = items[i].querySelector('.' + options.content);
			_closeItem(items[i], contentItem);
		}
	};

	let addListeners = () => {
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

/* popup */
let popup = options => {
	let wrapper = document.querySelector('.' + options.wrapper);

	let _tooglePopup = e => {
		e.preventDefault();

		if (e.target.className == options.btn) {
			_openPopup(e.target);
		}
	};

	let _openPopup = btn => {
		let overlayElement = document.createElement('div');
		overlayElement.classList.add('overlay');

		let popupElement = document.createElement('div');
		popupElement.classList.add('popup');

		let contentElement = document.createElement('div');
		contentElement.classList.add('popup__content');

		let content = btn.parentNode;

		let text = content
			.querySelector('.' + options.text)
			.textContent;
		contentElement.innerHTML = text;

		let titleElement = document.createElement('div');
		titleElement.classList.add('popup__title');

		let title = content
			.querySelector('.' + options.title)
			.textContent;
		titleElement.innerHTML = title;

		let closeElement = document.createElement("a");
		closeElement.classList.add("popup__close");
		closeElement.innerHTML = '<svg class="popup__close-picture"><use xlink:href="./img/icons/mysprite.svg#close"></use></svg>';
		closeElement.href = "#";
		closeElement.addEventListener("click", e => {
			e.preventDefault();
			_closePopup(overlayElement);
		});

		overlayElement.appendChild(popupElement);
		popupElement.appendChild(titleElement);
		popupElement.appendChild(contentElement);
		popupElement.appendChild(closeElement);

		document.body.appendChild(overlayElement);
	};

	let _closePopup = overlay => {
		document.body.removeChild(overlay);
	};

	let addListeners = () => {
		wrapper.addEventListener('click', _tooglePopup)
	};

	return {
		init: addListeners
	}
};

popup({
	wrapper: "reviews__list",
	btn: "reviews__button",
	title: "reviews__title",
	text: "reviews__text"
}).init();

/* One Page Scroll */

let OnePageScroll = options => {
	let currentSection = 0;
	let content = document.querySelector('.'+options.content);
	let countSections = document.querySelectorAll('.'+options.section).length;
	let listLinks = document.querySelectorAll('['+options.attribute+']');
	let scroll = false;

	let _slideToSection = (indexSection) => {
		if (!scroll) {
			if (indexSection >= 0 && indexSection < countSections) {
				currentSection = indexSection;

				scroll = true;

				let position = indexSection * -100 + '%';

				content.style.transform = `translateY(${position})`;
				content.style.webkitTransform = `translateY(${position})`;

				let sideNavElements = document.querySelectorAll('.' + options.sideNavigation);
				for (let i = 0; i < sideNavElements.length; i++) {
					if (i != indexSection) {
						sideNavElements[i].classList.remove(options.sideNavigation + '--active');
					} else {
						sideNavElements[i].classList.add(options.sideNavigation + '--active');
					}
				}

				setTimeout(() => {
					scroll = false;
				}, 1300);
			}
		}
	};

	//handlers for keyboard
	document.addEventListener('keydown', e => {
		switch (e.keyCode) {
			case 40: //down
				_slideToSection(currentSection + 1);
				break;
			case 38: //up
				_slideToSection(currentSection - 1);
				break;
		}
	});

	//handlers for links
	listLinks.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault();
			let index = parseInt((e.target).getAttribute(options.attribute));
			//fix for button-down
			if (!(index >= 0)) {
				index = parseInt((e.currentTarget).getAttribute(options.attribute));
			}
			_slideToSection(index);
		});
	});
};

OnePageScroll({
	content: 'content',
	section: 'section',
	sideNavigation: 'side-navigation__item',
	attribute: 'data-scroll-to'
});