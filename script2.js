const height = window.innerHeight;
const vhPixels = height * 1
const vhPixels2= height * 3.7

$(document).ready(function(){
    $(window).scroll(function(){
        // 
        if(this.scrollY < (0,vhPixels)){
           $('.text_2').addClass("sticky");
            $('.text_2A').addClass("add");
        }else{
            $('.text_2').removeClass("sticky");
            $('.text_2A').removeClass("add");
        }
        
        if(this.scrollY > 5){
            $('.scroll_down').addClass("remove");
        }else{
            $('.scroll_down').removeClass("remove")
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    

});


ScrollReveal().reveal('.car', { delay: 500 });
ScrollReveal().reveal('.car2', { delay: 500 });
ScrollReveal().reveal('.robots', { delay: 500 });
ScrollReveal().reveal('.health', { delay: 500 });
ScrollReveal().reveal('.contact', { delay: 500 });
