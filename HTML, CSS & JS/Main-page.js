$(document).ready(function (){
    $(window).scroll(function (){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    //slide up part
    $('.scroll-up-btn').click(function (){
        $('html').animate({scrollTop: 0});
    })

    // toggle menu/ bar script
    $('.menu-btn').click(function(){
        $('.navbar .menu-Bar').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation

    var typed = new Typed(".typing", {
        strings: ["Front End Developer", "Front End Developer", "Back End Developer", "Programmer", "Crypto Trader"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Front End Developer", "Back End Developer", "Programmer", "Crypto Trader"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});