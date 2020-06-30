// FADE IN FUNÇÃO
var $target = $('.anime'),
    animationClass = 'anime-start';
offset = $(window).height() * 3 / 4

function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function () {
        var itemTop = $(this).offset().top

        if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        }
        else {
            $(this).removeClass(animationClass);
        }
    })
}

animeScroll()

$(document).scroll(function () {
    animeScroll();
})

// Quando o usuário passar o mouse nas linhas de computador

const linhaHome = document.querySelector('.linha-home')
const btnHome = document.querySelector('.btn-linha-home')

linhaHome.onmouseover = () => {
    btnHome.style.display = 'block'
    btnHome.style.marginBottom = '30px';
}

linhaHome.onmouseout = e => {
    e.preventDefault()

    setTimeout(() => {
        btnHome.style.display = 'none'
    }, 2000)

}

const linhaGamer = document.querySelector('.linha-gamer')
const btnGamer = document.querySelector('.btn-linha-gamer')

linhaGamer.onmouseover = () => {
    btnGamer.style.display = 'block'
    btnGamer.style.marginBottom = '30px';
}

linhaGamer.onmouseout = e => {
    e.preventDefault()

    setTimeout(() => {
        btnGamer.style.display = 'none'
    }, 2000)

}
const linhaMonte = document.querySelector('.linha-monte')
const btnMonte = document.querySelector('.btn-linha-monte')

linhaMonte.onmouseover = () => {
    btnMonte.style.display = 'block'
    btnMonte.style.marginBottom = '30px';
}

linhaMonte.onmouseout = e => {
    e.preventDefault()

    setTimeout(() => {
        btnMonte.style.display = 'none'
    }, 2000)

}

const section1 = document.querySelector('div.section1')
const section2 = document.querySelector('div.section2')

function before() {
    section2.className = 'row section2'
    section2.style.display = 'none'

    section1.style.display = 'inline-block'
}

function previous() {
    section1.className = 'row section 1'
    section1.style.display = 'none'
    section2.style.display = 'inline-block'
}


function changeImage(imageID) {
    const mainImg = document.querySelector('#myimage')
    
    const image = document.querySelector(`#${imageID}`)
    const imageSrc = image.getAttribute('src')

    mainImg.src = imageSrc

    return mainImg;
}