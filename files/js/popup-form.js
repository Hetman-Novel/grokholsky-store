document.addEventListener("DOMContentLoaded", function() {
    
    let popupForm = document.querySelector('.popup-form')
    if (popupForm) {
        let popupFormSubmit = document.querySelector('.popup-form__submit')
        let closePopup = document.querySelector('.close-popup')
        popupFormSubmit.addEventListener('click', (e) => {
            e.preventDefault()
            popupFormSubmit.parentNode.parentNode.parentNode.classList.remove('before-active')
        })
        closePopup.addEventListener('click', (e) => {
            e.preventDefault()
            setTimeout(() => {
                popupFormSubmit.parentNode.parentNode.parentNode.classList.add('before-active')
            }, 600);
        })
    }
})