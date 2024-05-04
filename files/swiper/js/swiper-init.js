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

let pageProductWrapProductSliders = document.querySelector('.page-product__wrapProductSliders')
if (pageProductWrapProductSliders) {
   var swiper = new Swiper(".page-product__sliderSmall", {
      spaceBetween: 3,
      slidesPerView: 6,
      slidesPerGroup: 1,
      //freeMode: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      loop: false,
      initialSlide: 1,
      breakpoints: {
         0: {
            slidesPerView: 5.32,
            spaceBetween: 9,
         },
         721: {
            slidesPerView: 4.35,
            spaceBetween: 3,
         },
         801: {
            slidesPerView: 5.35,
            spaceBetween: 12,
         },
         1025: {
            slidesPerView: 6,
            spaceBetween: 3,
         },
      },
   });
   var swiper2 = new Swiper(".page-product__sliderBig", {
      spaceBetween: 50,
      /*navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },*/
      initialSlide: 1,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      thumbs: {
         swiper: swiper,
      },
   });
}

if (window.matchMedia("(max-width: 1099.98px)").matches) {
   let aPerfectCombinationSlider = document.querySelector('.a-perfect-combination__slider')
   if (aPerfectCombinationSlider) {
      new Swiper(aPerfectCombinationSlider, {
         slidesPerView: 4.7,
         slidesPerGroup: 1,
         watchOverflow: true,
         spaceBetween: 30,
         loop: false,
         speed: 800,
         effect: 'slide',
         breakpoints: {
            0: {
               slidesPerView: 2.53,
               spaceBetween: 8,
            },
            576: {
               slidesPerView: 3.50,
               spaceBetween: 15,
            },
            /*768: {
               slidesPerView: 2.5,
               spaceBetween: 30,
            },*/
            790: {
               slidesPerView: 4.2,
               spaceBetween: 30,
            },
            /*961: {
               slidesPerView: 3.2,
               spaceBetween: 15,
            },*/
            1025: {
               slidesPerView: 3.5,
               spaceBetween: 15,
            },
         },
      });
   }
}

let pageProductColorsSlider = document.querySelector('.page-product__colorsSlider')
if (pageProductColorsSlider) {
   new Swiper(pageProductColorsSlider, {
      slidesPerView: 4,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 8,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 5.30,
            spaceBetween: 8,
         },
         721: {
            slidesPerView: 4.5,
            spaceBetween: 12,
         },
         1025: {
            slidesPerView: 4,
            spaceBetween: 8,
         },
      },
   });
}