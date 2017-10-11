
$( document ).ready(function() {
    console.log('Ready');





    var arrowLeft = '<svg width="15" height="29" viewBox="0 0 15 29">' +
        '<path class="recording-slider__arrow" d="M384.987,273.273l-0.713.712-14.261-14.26,0.226-.226-0.226-.226,14.261-14.261,0.713,0.712L371.213,259.5Z" transform="translate(-370 -245)"/>' +
        '</svg>';

    var arrowRight = '<svg width="15px" height="29px">' +
        '<path class="recording-slider__arrow"' +
        ' d="M0.013,28.273 L0.726,28.985 L14.987,14.725 L14.761,14.499 L14.987,14.273 L0.726,0.012 L0.013,0.724 L13.787,14.499 L0.013,28.273 Z"/>' +
        '</svg>';


    $('.recording-slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        navText: [arrowLeft, arrowRight],
        smartSpeed: 1500,
        responsive : {
            1000: {
                nav: true
            }
        }
    });

    $('.slider-2__wrapper').owlCarousel({
        items: 1,
        nav: true,
        navText: [arrowLeft, arrowRight],
        dots: true,
        responsive : {
            1000: {
                nav: false
            }
        }

    });
    $('.happy-parents__slider').owlCarousel({
        margin: 17,
        items: 1,
        nav: false,
        navText: [arrowLeft, arrowRight],
        dots: true,
        responsive : {
            1000: {
                nav: true
            }
        }

    });
    $('.stageSlide-videos').owlCarousel({
        margin: 17,
        items: 1,
        nav: true,
        navText: [arrowLeft, arrowRight],
        dots: true,

    });
    $('.slider').owlCarousel({
        margin: 17,
        items: 1,
        nav: true,
        dots: true,
        responsive : {
            1000: {
                nav: false
            }
        }

    });






    var container = document.getElementsByClassName('container')[0];
    var leftSide = document.getElementsByClassName('left-side')[0];
    var leftSideContainer = document.getElementsByClassName('left-side-content')[0];
    var container_padding = 88;

    var btnScrollDown = document.getElementsByClassName('to-next')[0];

/*
    btnScrollDown.addEventListener('click',function () {
        $.scrollTo('.recording__videoBlock',500)
    });
*/



    var rightLine = document.getElementsByClassName('full-right');
    var leftLine = document.getElementsByClassName('full-left');
    var containerPadding = 20;
    var containerPaddingRight = 147;
    function RightSize() {
        for(var i = 0;i<rightLine.length;i++)
            rightLine[i].style.width = container.offsetLeft + containerPadding + 'px';
        for(var i = 0;i<leftLine.length;i++)
            leftLine[i].style.width = container.offsetLeft + containerPadding + containerPaddingRight + 'px';
    }
    RightSize();
    function LeftSize() {

         leftSide.style.width = window.innerWidth > 1290 ? container.offsetLeft + container_padding + 'px': window.innerWidth > 1024 ? '170px' : '100%';
        leftSideContainer.style.height = window.innerWidth > 1024 ? window.innerHeight + 'px' : 'auto';
    }
   LeftSize();


    function fullHeightDiv() {
        var div = document.getElementsByClassName('fullHeight');
        for (var i = 0; i<div.length;i++)
            div[i].style.minHeight = window.innerHeight + 'px';
    }

    //fullHeightDiv();

    window.addEventListener('resize', function () {
        RightSize();
         LeftSize();
       // fullHeightDiv();

    });


    var links = document.getElementsByTagName('a');
    for (var i= 0; i<links.length; i++){
        links[i].addEventListener('click',function (e) {
            var url = this.getAttribute("href");
            url === '#' ? e.preventDefault() : false;
        })
    }

    $(window).scroll(function(){
        if  ($(window).scrollTop() == $(document).height() - $(window).height())
        {
           $('.left-side__links').css({
               'bottom': '250px'
           });
           setTimeout(function () {
               $('.dev-logo').css({
                   'opacity': 1
               })
           },300)

        }else {
            $('.left-side__links').css({
                'bottom': '15px'
            })
            $('.dev-logo').css({
                'opacity': 0
            })
        }
    });

    $('.btn__menu').click(function () {
        $('.wrapper_btnMenu__menu').show();
    });
    $('.btn__closeMenu').click(function () {
        $('.wrapper_btnMenu__menu').hide();
    })




    $(document).mouseup(function (e) {
        var container = $('.wrapper_btnMenu__menu');

        var select = $('.consulting-form__input--doctor');

        //!container.is(e.target) ? container.hide() : false;

        if(e.target == $('.doctors-select')){
            $('.consulting-form__input--doctor').removeClass('active');

        }

    });

    $('.consulting-form__input--date').datepicker({
            dateFormat: "dd/mm/y",
            minDate: 0

    }
        );

    var d = new Date();

    var day = d.getDate();
    var moth = d.getMonth();
    var year = d.getFullYear();


    day = day>9 ? day : '0'+ day;
    moth = moth >9 ? moth : '0'+ moth;

    console.log(day+ '/'+ moth + '/' + year);


    $('.consulting-form__input--date').val(day + '/' + moth + '/' + year);

    $('.banner__wrapper--btnPay').click(function () {
       $('#consulting-form-btn').click();

       if($('#doctor').val().length<1){
          $('.consulting-form__input--doctor').addClass('error');
       }

    });
    $('.consulting-form__btnIcon').click(function () {
       $(this).parent('div').find('input').focus();
    });

    $('.doctors-select li').click(function () {
        $('.doctors-select li').removeClass('active');
        $('.consulting-form__placeholder').text($(this).text());
        $(this).addClass('active');
        $('#doctor').val($(this).text());
        $('.consulting-form__input--doctor').removeClass('error');

    });


    $('.consulting-form__input--doctor').click(function () {
       $(this).toggleClass('active');
        //$('.doctors-select').slideToggle(0);
    });




    //validation form
    $("#phone").mask("(999) 999-99-99");
    $('#consulting-form').validate(

        {
            rules:{
                phone: {
                    minlength: 15
                },
                doctor: {
                    required: false
                }
            },
            errorPlacement: function () {
                $('.controll').parent('div').addClass('error');
            },
            unhighlight: function(element) {
                $(element).parent('div').removeClass('error').addClass('success');
            },
            highlight: function(element) {
                $(element).parent('div').removeClass('success').addClass('error');
            }

        }
    );


    //niceScroll
    $('.video-chat-body').niceScroll({
        cursorcolor:"#ff4972",
        autohidemode: false,
        cursorminheight : 32
    });



    $('.toggle .title').click(function () {

        $(this).toggleClass('active').parent('.toggle').find('.toggle-links').slideToggle();
    });


    //video-tests.html

    (function () {
        var test = $('.VT-test-pagination__link--active').data('test');

        var pagination_link = $('.VT-test-pagination__link');
        pagination_link.click(function () {
            var test = $(this).data('test');
            $('.VT-test-pagination__link').removeClass('VT-test-pagination__link--active');
            $(this).addClass('VT-test-pagination__link--active');
            $('.slider').trigger('to.owl.carousel', test-1)

        });
     $('#test-'+test).show();
     $('.test-nav').html('<button class="btn test__nav test__nav--prev">'+arrowLeft+'</button> <button class="btn test__nav test__nav--next">'+arrowRight+'</button>');


     $('.test__nav--next').click(function () {
         var test = $('.VT-test-pagination__link--active').data('test');
         var count =  $('.VT-test-pagination__link').length;
         var next = test < count ? test+1 : false;

         test < count ? $('.VT-test-pagination__link').removeClass('VT-test-pagination__link--active') : false;
         $('.VT-test-pagination__link[data-test="'+next+'"]').addClass('VT-test-pagination__link--active');

         $('.slider .owl-next').click();
     });




        $('.test__nav--prev').click(function () {
            var test = $('.VT-test-pagination__link--active').data('test');
            var prev = test === '1' ? false : test-1;

            test !== 1 ? $('.VT-test-pagination__link').removeClass('VT-test-pagination__link--active') : false;

            $('.VT-test-pagination__link[data-test="'+prev+'"]').addClass('VT-test-pagination__link--active');

            $('.slider .owl-prev').click();

        });

        $('.slider').on('changed.owl.carousel', function(event) {
            var currentItem = event.item.index + 1;
            $('.VT-test-pagination__link').removeClass('VT-test-pagination__link--active');
            $('.VT-test-pagination__link[data-test="'+currentItem+'"]').addClass('VT-test-pagination__link--active');
        });

    })();



    $('.test__answer,.test__radio').click(function () {
        $('.test__radio').removeClass('test__radio--active');
        $(this).parent('.flex ').find('input').prop("checked", true);
        $(this).parent('.flex ').find('.test__radio').addClass('test__radio--active');
       
       
    });


    $('.webinar-see-also .banner').click(function () {
        $('.your-questionBtn').click();
    });

function ShowInfo(button,block) {
    $(button).click(function () {
       $(this).hide();
       $(block).show();
    });
}
    ShowInfo('.more-info--information','.information__text');


    $('main').hasClass('custom-header-footer') ?  $('body').addClass('custom-f-h') : false;
});

if ($(window).width()<1024){
    $('.btn__menu').click(function () {
    $('.wrapper_btnMenu__menu').css({
        'left':'0'})

    });
    $('.btn__closeMenu').click(function () {
        $('.wrapper_btnMenu__menu').css({
            'left':'100%'
        })

    });
}

function AddSliderMobile() {
    if($(window).width()<992){
        $('.women-passed .columns,.consulting-our-doctors .columns,.five-steps__columns .col-12').addClass('owl-carousel');
        $('.women-passed .columns,.consulting-our-doctors .columns,.five-steps__columns  .col-12').owlCarousel({
            items: 1,
            loop: true,
            responsive: {
                992: {
                    touchDrag: false
                }
            }
        });
    }else{
        $('.women-passed .columns,.consulting-our-doctors .columns,.five-steps__columns .col-12').removeClass('owl-carousel');
    }
}
AddSliderMobile();
$(window).resize(function () {
    AddSliderMobile();
});

$('.more-info--three-options').click(function () {
   $(this).hide();
    $(this).parent('.three-options__columnWr').find('.three-options__column-Text').show()
});
$('.fear__li--title').click(function () {
    $(this).parent('.fear__ul').find('.fear__li').show();
});




