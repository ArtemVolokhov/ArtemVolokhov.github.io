$(document).ready(function() {
    $('.button[filter]').click(function(){ // ловимо натиск на кнопку із фільтром
        if($(this).attr('val') == 'off'){   //перевіряємо, чи кнопка вимкнена, щоб уникнути повторних натисків
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
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style'
      });
})
