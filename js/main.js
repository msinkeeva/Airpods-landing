const chooseColor = document.querySelectorAll(".choose-color__btn")
const contentItem = document.querySelectorAll(".content-item")
const menuLink = document.querySelectorAll('.menu__link')
const menuBtn = document.querySelector('.menu__btn')

chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open (evt){
    const target = evt.currentTarget
    const button = target.dataset.button
    const contentActive = document.querySelectorAll(`.${button}`)

    chooseColor.forEach(function (item){
        item.classList.remove('choose-color__btn--active')
    })

    target.classList.add('choose-color__btn--active')

    contentItem.forEach(function(item){
        item.classList.remove('content-item__active')
    })

    contentActive.forEach(function(item){
        item.classList.add('content-item__active')
    })
    menuLink.forEach(function(link){
        link.className = `menu__link ${button}`
    })
    menuBtn.className = `menu__btn ${button}`
}