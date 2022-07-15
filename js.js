const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
    },
    mousewheel: true,
    heyboard: true,
    breakpoints: {
        776: {
            slidesPerView: 2,
            setWrapperSize: true
        },

        992: {
            slidesPerView: 2,
            setWrapperSize: true,
        },

        1200: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

