let screenHeight = $(window).height();
let currentMenuHeight = $(".nav-menu .active").offset().top;

if(currentMenuHeight > screenHeight*0.8){
    $(".sidebar").animate({
        scrollTop:currentMenuHeight-100
    },1000);
}