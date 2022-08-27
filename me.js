let btn = document.querySelector('.nav__lang')
let navmenu = document.querySelector('.nav__click')
let navremove = document.querySelector('.nav__click__remove')

btn.addEventListener('click', function () {
    navmenu.style.top = 0
})

navremove.addEventListener('click', function () {
    navmenu.style.top = '-660px'
})

/* ========= click start ========== */

$(window).ready(function () {
    let a = $('.navbar__link')

    a.click(function (event) {
    event.preventDefault()

        a.removeClass('active')
        let id = $(this).addClass('active').attr('href')
        let kordinata = $(id).offset().top
        $('body,html').animate({
            scrollTop: kordinata 
        }, 1000)

        $(window).scroll(function () {
            let scroll = $(this).scrollTop()              

            a.each(function () {
                let target = $(this).attr('href')
                let selecttor = $(target).offset().top

                if (scroll >= selecttor) {
                    a.removeClass('active')
                    $(this).addClass('active')
                }
            })
        })
     })
})











