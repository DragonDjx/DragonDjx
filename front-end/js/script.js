// FADE IN FUNÇÃO
var $target = $('.anime'),
	animationClass = 'anime-start';
	offset = $(window).height() * 3/4

function animeScroll(){
	var documentTop = $(document).scrollTop();
	
	$target.each(function() {
		var itemTop = $(this).offset().top

		if(documentTop > itemTop - offset) {
			$(this).addClass(animationClass);
		}
		else {
			$(this).removeClass(animationClass);
		}
	})
}	

animeScroll()

$(document).scroll(function() {
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

    setTimeout(() =>{
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

    setTimeout(() =>{
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

    setTimeout(() =>{
        btnMonte.style.display = 'none'
    }, 2000)
   
}