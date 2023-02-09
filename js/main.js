let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__nav--active');
  headerLogin.classList.toggle('header__login--active');
  headerInner.classList.toggle('header__inner--active');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function() {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    headerInner.classList.remove('header__inner--active');
  })
});


const heroSelect = document.querySelectorAll('.header__select');

heroSelect.forEach(el => {
  const heroChoices = new Choices(el, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
  })
})


const heroSwiper = new Swiper(".hero__swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const saleSwiper = new Swiper(".sale__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".sale__next",
    prevEl: ".sale__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 3,
    }
  }
});

const products = document.querySelectorAll('.sale__product');

if (products) {
	products.forEach(el => {
		let currentProduct = el;
		const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__item');
		const imagePagination = currentProduct.querySelector('.image-pagination');
		if (imageSwitchItems.length > 1) {
			imageSwitchItems.forEach((el, index) => {
				el.setAttribute('data-index', index);
				imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;
				el.addEventListener('mouseenter', (e) => {
					currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item--active')});
					currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
				});

				el.addEventListener('mouseleave', (e) => {
					currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item--active')});
					currentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
				});
			});
		}
	});
}

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });

    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

const dayofferSwiper = new Swiper(".dayoffer__swiper", {
  navigation: {
    nextEl: ".dayoffer__next",
    prevEl: ".dayoffer__prev",
  },
});

const dayofferSwiperMain = new Swiper(".dayoffer__swiper--main", {
  loop: true,
  navigation: {
    nextEl: ".dayoffer__swiper--main__next",
    prevEl: ".dayoffer__swiper--main__prev",
  },
});

tippy('[data-tippy-content]', {
  arrow: true,
});

const saleSelectGold = document.querySelectorAll('.sale__select--gold');
saleSelectGold.forEach(el => {
  const saleChoicesGold = new Choices(el, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
  })
})


const saleSelectSize = document.querySelectorAll('.sale__select--size');
saleSelectSize.forEach(el => {
  const saleChoicesSize = new Choices(el, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
  })
})






