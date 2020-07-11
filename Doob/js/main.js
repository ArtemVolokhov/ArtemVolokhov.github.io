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
    $('.slider').slick({
        prevArrow: $('.ourcompany__arrow-left'),
        nextArrow: $('.ourcompany__arrow-right'),
        infinite: false
    });

    $('.slider-gallery').slick({
        slidesPerRow: 3,
        rows: 2,
        prevArrow: $('.portfolio__arrow-left'),
        nextArrow: $('.portfolio__arrow-right'),
        infinite: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 2,
                    rows: 2
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesPerRow: 1,
                    rows: 2
                }
            }


        ]
    });
    $('.news__slider').slick({
        slidesToShow: 3,
        prevArrow: $('.news__slider-arrow-left'),
        nextArrow: $('.news__slider-arrow-right'),
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 850,
                settings: {
                    slidesToShow: 2

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }


        ]
    });
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
    });
});