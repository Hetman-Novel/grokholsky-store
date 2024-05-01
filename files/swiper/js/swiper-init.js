document.addEventListener("DOMContentLoaded", function() {
   let sliderForPhonesButtons = document.querySelectorAll('.slider-for-phones__button')
   sliderForPhonesButtons.forEach(sliderForPhonesButton => {
      if (sliderForPhonesButton) {
         sliderForPhonesButton.classList.remove('after-page-loads')
      }
   })
})

let bannerSlider = document.querySelector('.bannerSlider__slider')
if (bannerSlider) {
    new Swiper(bannerSlider, {
        pagination: {
            el: '.bannerSlider__pagination',
            clickable: true,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 50,
        loop: true,
        autoplay: {
            deley: 500,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        slideShadows: false
    });
}

let firstSlider = document.getElementById('first-slider')
if (firstSlider) {
    new Swiper(firstSlider, {
        navigation: {
            prevEl: '#first-slider-btn-prev',
            nextEl: '#first-slider-btn-next',
        },
        slidesPerView: 5,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 16,
        loop: false,
        speed: 800,
        effect: 'slide',
        breakpoints: {
            0: {
               slidesPerView: 2.38,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 3.3,
               spaceBetween: 10,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            840: {
               slidesPerView: 4,
            },
            1025: {
               slidesPerView: 5,
               spaceBetween: 16,
            }
         },
    });
}

let secondSlider = document.getElementById('second-slider')
if (secondSlider) {
    new Swiper(secondSlider, {
        navigation: {
            prevEl: '#second-slider-btn-prev',
            nextEl: '#second-slider-btn-next',
        },
        slidesPerView: 5,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 16,
        loop: false,
        speed: 800,
        effect: 'slide',
        breakpoints: {
            0: {
               slidesPerView: 2.38,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 3.3,
               spaceBetween: 10,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            840: {
               slidesPerView: 4,
            },
            1025: {
               slidesPerView: 5,
               spaceBetween: 16,
            }
         },
    });
}

let thirdSlider = document.getElementById('third-slider')
if (thirdSlider) {
    new Swiper(thirdSlider, {
        navigation: {
            prevEl: '#third-slider-btn-prev',
            nextEl: '#third-slider-btn-next',
        },
        slidesPerView: 5,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 16,
        loop: false,
        speed: 800,
        effect: 'slide',
        breakpoints: {
            0: {
               slidesPerView: 2.38,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 3.3,
               spaceBetween: 10,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            840: {
               slidesPerView: 4,
            },
            1025: {
               slidesPerView: 5,
               spaceBetween: 16,
            }
         },
    });
}

let fourthSlider = document.getElementById('fourth-slider')
if (fourthSlider) {
    new Swiper(fourthSlider, {
        navigation: {
            prevEl: '#fourth-slider-btn-prev',
            nextEl: '#fourth-slider-btn-next',
        },
        slidesPerView: 5,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 16,
        loop: false,
        speed: 800,
        effect: 'slide',
        breakpoints: {
            0: {
               slidesPerView: 2.38,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 3.3,
               spaceBetween: 10,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            840: {
               slidesPerView: 4,
            },
            1025: {
               slidesPerView: 5,
               spaceBetween: 16,
            }
         },
    });
}

let sliderAboveCatalog = document.getElementById('slider-above-catalog')
if (sliderAboveCatalog) {
   new Swiper(sliderAboveCatalog, {
      navigation: {
         prevEl: '#slider-above-catalog-btn-prev',
         nextEl: '#slider-above-catalog-btn-next',
      },
      slidesPerView: 10,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 6,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 4.28,
         },
         461: {
            slidesPerView: 3.5,
         },
         576: {
            slidesPerView: 4,
         },
         1025: {
            slidesPerView: 8,
         },
         1281: {
            slidesPerView: 10,
         }
      },
   });
}