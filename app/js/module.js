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

//check mobile devices
let checkMobile = () => {
	let isMobile = false;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent)) isMobile = true;
	return isMobile;
};

/* One Page Scroll */
let OnePageScroll = options => {
	let currentSection = 0;
	let content = document.querySelector('.' + options.content);
	let countSections = document.querySelectorAll('.' + options.section).length;
	let listLinks = document.querySelectorAll('[' + options.attribute + ']');
	let scroll = false;

	let _swipeDetected = element => {
		let startX,
			startY,
			distX,
			distY,
			deviation = 200, //deviation from main direction
			threshold = 150, //min range for swipe
			allowedTime = 1000, //max time for range
			elapsedTime, //runtime
			startTime;

		element.addEventListener('touchstart', e => {
			let touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime(); //time touch with sensor
		});

		//disable touchmove
		element.addEventListener('touchmove', e => e.preventDefault());

		element.addEventListener('touchend', e => {
			let touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX; //get horizontal move
			distY = touchobj.pageY - startY; //get vertical move
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime) {
				if (Math.abs(distY) >= threshold && Math.abs(distX) <= deviation) { //vertical swipe
					swipedir = (distY < 0) ? _slideToSection(currentSection + 1) : _slideToSection(currentSection - 1)
				}
			}
		});
	};

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

	//handlers for wheel
	document.addEventListener('wheel', e => {
		let deltaY = e.deltaY;

		let index = deltaY > 0 ? currentSection + 1 : currentSection - 1;

		_slideToSection(index);
	});

	//handlers for swipe
	if (checkMobile) {
		_swipeDetected(content);
	}
};

OnePageScroll({
	content: 'content',
	section: 'section',
	sideNavigation: 'side-navigation__item',
	attribute: 'data-scroll-to'
});

/* slider */
let slider = options => {
	let wrapper = document.querySelector('.'+options.wrapper);
	let widthWrapper = wrapper.clientWidth;
	wrapper.style.width = widthWrapper  + 'px';

	let list = document.querySelector('.'+options.list);
	let items = document.querySelectorAll('.'+options.item);

	let left = document.querySelector('.'+options.prev);
	let right = document.querySelector('.'+options.next);

	items.forEach(element => {
		element.style.width = widthWrapper  + 'px';
	});

	let minRight = 0;
	let maxRight = widthWrapper * (items.length - 1);
	let step = widthWrapper;
	let currentRight = 0;

	let _slideRight = value => {
		if (value <= maxRight) {
			currentRight += step;
			list.style.right = currentRight + "px";
		}
	};

	let _slideLeft = value => {
		if (value >= minRight) {
			currentRight -= step;
			list.style.right = currentRight + "px";
		}
	};

	let initial = () => {
		list.style.right = currentRight;

		right.addEventListener("click", e => {
			e.preventDefault();

			_slideRight(currentRight + step);
		});

		left.addEventListener("click", e => {
			e.preventDefault();

			_slideLeft(currentRight - step);
		});

		_swipeDetected(wrapper);
	};

	let _swipeDetected = element => {
		let startX,
			startY,
			distX,
			distY,
			deviation = 200, //deviation from main direction
			threshold = 150, //min range for swipe
			allowedTime = 1000, //max time for range
			elapsedTime, //runtime
			startTime;

		element.addEventListener('touchstart', e => {
			let touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime(); //time touch with sensor
		});

		//disable touchmove
		element.addEventListener('touchmove', e => e.preventDefault());

		element.addEventListener('touchend', e => {
			let touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX; //get horizontal move
			distY = touchobj.pageY - startY; //get vertical move
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime) {
				if (Math.abs(distX) >= threshold && Math.abs(distY) <= deviation) { //horizontal swipe
					swipedir = (distX < 0) ? _slideRight(currentRight + step) : _slideLeft(currentRight - step)
				}
			}
		});
	};

	let _mobileIngredients = () => {
		let btnIngredients = document.querySelector('.burger__ingredients');
		let btnCloseIngredients = document.querySelector('.dropdown__close');

		btnCloseIngredients.addEventListener('click', e => {
			e.preventDefault();

			btnIngredients.classList.remove('active');
		});
		btnCloseIngredients.addEventListener('touchstart', e => {
			e.preventDefault();

			btnIngredients.classList.remove('active');
		});

		if (checkMobile) {
			btnIngredients.addEventListener('click', e => {
				btnIngredients.classList.add("active");
			});
		}
		btnIngredients.addEventListener('mouseenter', e => {
			btnIngredients.classList.add("active");
		});

		btnIngredients.addEventListener('mouseleave', e => {
			btnIngredients.classList.remove("active");
		});
	};
	_mobileIngredients();

	return {
		init: initial
	}
};

slider({
	wrapper: 'burger__wrapper',
	list: 'burger__list',
	item: 'burger__item',
	next: 'burger__controls-link--next',
	prev: 'burger__controls-link--prev'
}).init();

/* form order */
const formOrder = $("#form-order");
const formReset = $(".form__reset");
formOrder.on('submit', function(e){
		e.preventDefault();

		let result = $.ajax(formOrder.attr('action'), {
			type: formOrder.attr('method'),
			data: $(this).serialize(),
			dataType: 'JSON'
		});

		result.done(function (data) {
			formReset.trigger('click');
		});

		result.fail(function (data) {
			console.log(data);
		});

		result.always(function (data) {
			let answer = openOverlay({
				classContainer: 'form__answer',
				classTitle: 'form__answer-title',
				classClose: 'form__answer_close',
				content: data.msg
			});

			document.body.appendChild(answer);
		})
	});

var openOverlay = options => {
	const overlayElement = document.createElement("div");
	overlayElement.classList.add("overlay");

	const containerElement = document.createElement("div");
	containerElement.classList.add(options.classContainer);

	const contentElement = document.createElement("div");
	contentElement.classList.add(options.classTitle);
	contentElement.textContent = options.content;

	const closeElement = document.createElement("button");
	closeElement.classList.add(options.classClose);
	closeElement.classList.add('order-link');
	closeElement.textContent = "Закрыть";
	closeElement.addEventListener("click", function() {
		document.body.removeChild(overlayElement);
	});

	overlayElement.appendChild(containerElement);
	containerElement.appendChild(contentElement);
	containerElement.appendChild(closeElement);

	return overlayElement;
};