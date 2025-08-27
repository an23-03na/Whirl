
const button = document.querySelector(".burger")
const nav = document.querySelector(".nav")
const dialogButton = document.querySelector(".dialog-button")
const dialog = document.querySelector(".dialog")
const dialogClose = document.querySelector(".dialog__close")
const accordion = document.querySelector(".accordion")
const accordionItemContent = document.querySelectorAll(".accordion__item-content")

accordion.onclick = (e) => {
    if (e.target.closest(".accordion__button")) {
        accordionItemContent.forEach(el => {
            el.classList.remove("accordion__item-content_active")
        })
        e.target.closest(".accordion__button").classList.add("accordion__button_active")
        e.target.closest(".accordion__button").nextElementSibling.classList.add("accordion__item-content_active")
    }
}

// dialogButton.onclick = () => {
//     dialog.open = true
// }
// dialogClose.onclick = () => {
//     dialog.open = false
// }

button.onclick = () => {
    document.body.classList.toggle("scroll-lock")
    button.classList.toggle("burger_active")
    nav.classList.toggle("nav_active")
}
nav.onclick = (e) => {
    if (e.target.closest(".nav__link")) {
        document.body.classList.remove("scroll-lock")
        button.classList.remove("burger_active")
        nav.classList.remove("nav_active")
    }
}