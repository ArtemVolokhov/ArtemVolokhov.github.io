$(document).ready(function () {
    /*---------------------Портфолио */
    $('.button[filter]').click(function () { // ловимо натиск на кнопку із фільтром
        if ($(this).attr('val') == 'off') {   //перевіряємо, чи кнопка вимкнена, щоб уникнути повторних натисків
            $('.button[filter]').attr('val', 'off').removeClass('focused');     //вимикаємо всі кнопки і прибираємо класс підсвітки
            $(this).attr('val', 'on').addClass('focused');      //вмикаємо натиснуту кнопку і додаємо класс підсвітки
            $('.filter > div').hide(0);     //ховаємо всі картки
            $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300); //показуємо картки із значення фільтра, який співпадає із натиснутою кнопкою
            if ($(this).attr('filter') == 'all') {      //перевіряємо, чи натиснута кнопка це кнопка ALL
                $('.button[filter]').attr('val', 'off').removeClass('focused');         //вимикаємо всі кнопки і прибираємо в них підсвітки активності
                $(this).attr('val', 'on').addClass('focused');      //для натиснутої кнопки додаємо класс активності
                $('.filter > div').show(300);       // показуємо всі картки
            }
        }
    })
    /*---------------------Слайдер */
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 650,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }]
    });
    /*---------------------Меню, переход по странице */
    $('ul.menu a[href^="#"').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
        $('ul.menu a[href^="#"').css({ 'color': '#212121' });
        $(this).css({ 'color': '#004bee' });
        return false;
    });
    /*---------------------Выпадающее меню */
   $('.menu-icon').click(function () {
      $('nav').slideToggle(500);
      $('ul.menu').css({
         'display': 'flex',
         'flex-direction': 'column'
      });
      if ($('.menu-icon').html() == '<i class="fas fa-bars" aria-hidden="true"></i>') {
         $(this).html('<i class="fas fa-times "></i>');
      } else {
         $(this).html('<i class="fas fa-bars"></i>');
      }
    });


    /*---------------------Кнопка наверх */
    $(window).scroll(function(){
        if ($(this).scrollTop() != 0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });
    $('#toTop').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

});
