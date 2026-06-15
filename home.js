// MENU TOGGLE
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


// HOME SLIDER
var homeSwiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    on: {
        slideChangeTransitionStart: function () {
            document.querySelectorAll(
                '.swiper-slide .content span, .swiper-slide .content h3, .swiper-slide .content .btn'
            ).forEach(el => {
                el.style.animation = 'none';
            });
        },

        slideChangeTransitionEnd: function () {
            let activeSlide = document.querySelector('.home-slider .swiper-slide-active');

            activeSlide.querySelectorAll('.content span').forEach(el => {
                el.style.animation = 'fadeIn 0.4s ease .2s backwards';
            });

            activeSlide.querySelectorAll('.content h3').forEach(el => {
                el.style.animation = 'fadeIn 0.4s ease .4s backwards';
            });

            activeSlide.querySelectorAll('.content .btn').forEach(el => {
                el.style.animation = 'fadeIn 0.4s ease .6s backwards';
            });
        }
    }
});


// FOOD SLIDER
var foodSwiper = new Swiper(".food-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,

    pagination: {
        el: ".food .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        700: {
            slidesPerView: 2,
        },

        1000: {
            slidesPerView: 3,
        },
    },
});


// FOOD PREVIEW
let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {

    food.onclick = () => {

        previewContainer.style.display = 'flex';

        let name = food.getAttribute('data-name');

        previewBox.forEach(preview => {

            let target = preview.getAttribute('data-target');

            if (name == target) {
                preview.classList.add('active');
            }

        });

    };

});


// CLOSE PREVIEW
previewContainer.querySelector('#close-preview').onclick = () => {

    previewContainer.style.display = 'none';

    previewBox.forEach(close => {
        close.classList.remove('active');
    });

};


// MENU SLIDER
var menuSwiper = new Swiper(".menu-slider", {
    grabCursor: true,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    spaceBetween: 20,

    pagination: {
        el: ".menu .swiper-pagination",
        clickable: true,
    },
});


// BLOGS SLIDER
var blogsSwiper = new Swiper(".blogs-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,

    pagination: {
        el: ".blogs .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        991: {
            slidesPerView: 3,
        },
    },
});