document.addEventListener("DOMContentLoaded", function() {
    
    let popupForms = document.querySelectorAll('.popup-form');

    popupForms.forEach(function(popupForm) {
        let popupFormSubmits = popupForm.querySelectorAll('.popup-form__submit');
        
        popupFormSubmits.forEach(function(popupFormSubmit) {
            popupFormSubmit.addEventListener('click', function(e) {
                e.preventDefault();
                let popupContent = this.closest('.popup__content');
                if (popupContent) {
                    popupContent.classList.remove('before-active');
                }
            });
        });
    
        let rPopupFormWrapStarsRating = popupForm.querySelector('.popup-form__wrapStarsRating');
        popupForm.querySelectorAll('.popup-form-field-reset').forEach(function(field) {
            popupFormSubmits.forEach(function(popupFormSubmit) {
                popupFormSubmit.addEventListener('click', function() {
                    if (field.type === 'radio' || field.type === 'checkbox') {
                        field.checked = false;
                    } else {
                        field.value = '';
                    }
                    if (rPopupFormWrapStarsRating) {
                        rPopupFormWrapStarsRating.classList.remove('rating-1', 'rating-2', 'rating-3', 'rating-4', 'rating-5');
                    }
                });
            });
        });
    });
    
    let closePopups = document.querySelectorAll('.close-popup');
    let popupBodies = document.querySelectorAll('.popup__body');
    
    function togglePopupContents() {
        let popupContents = document.querySelectorAll('.popup__content:not(.before-active)');
        popupContents.forEach(function(popupContent) {
            setTimeout(function() {
                popupContent.classList.add('before-active');
            }, 600);
        });
    }

    closePopups.forEach(function(closePopup) {
        closePopup.addEventListener('click', togglePopupContents);
    });
    
    popupBodies.forEach(function(popupBody) {
        popupBody.addEventListener('click', function(event) {
            if (event.target === this) {
                togglePopupContents();
            }
        });
    });

    let dPopupClose = document.querySelector('.cancel-reboot .popup__close')
    dPopupClose.addEventListener('click', function(e) {
        e.preventDefault();
        dPopupClose.parentNode.parentNode.parentNode.classList.remove('open');
        setTimeout(function() {
            document.body.classList.remove('lock')
        }, 600)
    });

    // Redirect to another page after placing an order
    let checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'thank-you-for-your-order.html';
        });
    }
})