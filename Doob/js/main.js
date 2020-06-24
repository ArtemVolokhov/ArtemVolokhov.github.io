$(document).ready(function() {
    const mainNav = document.querySelector('.main-nav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerMenu.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".main-nav"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass("open"); // скрываем его
        }
    });
});