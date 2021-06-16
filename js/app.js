

$(".show-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft:0});
    // console.log('hello');
});

$(".hide-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft:"-100%"});
    // console.log('hello');
});

// function go(url){
//     location.href = `${url}`;
// }

// go = url => location.href = `${url}`;
function go(url){
    setTimeout(function(){
        location.href = `${url}`;
    },1000);  
}

$(".full-screen-btn").click(function(){
    let current = $(this).closest('.card');
    current.toggleClass('full-screen-card');

    if(current.hasClass('full-screen-card')){
        $(this).html('<i class="feather-minimize-2"></i>');

    }else{
        $(this).html('<i class="feather-maximize-2"></i>');
    } 
    
});








