
$('.venobox').venobox({
    framewidth : '400px',                            // default: ''
    frameheight: 'auto',                            // default: ''
    border     : '0px',                             // default: '0'
    bgcolor    : '#5dff5e',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    share      : ['facebook', 'twitter', 'download'] // default: []
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('.slide').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay : true,
    autoplaySpeed: 3000,
    responsive: [
        // {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //     }
        // },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(".customer-slide").slick({
    dots: true,
    infinite: true,
    speed: 3000,
    arrows :false,
    autoplay : true,
    autoplaySpeed: 5000,
})

$(".navbar-toggler").on("click",function () {
    let show =  $(".navbar-collapse").hasClass("show");

    if(show){
        $(".navbar-toggler i").addClass("feather-menu");
        $(".navbar-toggler i").removeClass("feather-x");
    }else{
        $(".navbar-toggler i").removeClass("feather-menu");
        $(".navbar-toggler i").addClass("feather-x");
    }

});

let screenHeight = $(window).height();
console.log(screenHeight/2 -70);

$(window).scroll(function(){
    let current = $(this).scrollTop();
    if(screenHeight/2 -70 <= current){
        $(".nav-bar").addClass("nav-show");
    }else{
        $(".nav-bar").removeClass("nav-show");
    }
})

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();

$(window).on("load",function(){
    $(".loading").fadeOut(2000)
})