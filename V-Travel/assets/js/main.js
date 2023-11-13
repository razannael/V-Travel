
const navbar = document.querySelector('.navbar')
const headercontentspan = document.querySelector('.header-content span')
const scrolltotopbtn = document.querySelector('.scroll-to-top')
const placessection = document.querySelector('.places')
const loading = document.querySelector('.preloader-area')
const aboutSection = document.querySelector('.about')
window.addEventListener('scroll', function(){
    if(window.scrollY > headercontentspan.offsetTop) {
        navbar.style.backgroundColor = "#333"
    }
    else{
        navbar.style.backgroundColor = "transparent"
    }
    if(window.scrollY > placessection.offsetTop) {
        scrolltotopbtn.classList.remove('opacity-0','invisible')
    }
    else{
        scrolltotopbtn.classList.add('opacity-0','invisible')
    }
})

$('.navbar a').click(function(){
    let currentId = $(this).attr('href')
    let sectionOffSet = $(currentId).offset().top
    $('html , body').animate({scrollTop:sectionOffSet},2000)
})

scrolltotopbtn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"

    })
})

window.addEventListener('load', function(){
    setTimeout(function(){
      loading.classList.add('opacity-0', 'invisible')
      document.body.overflow = 'auto'
    }, 1000)
})










$(document).ready(function(){
    // owl carousal started for section places
var owlOne = $("#first-carousel");
owlOne.owlCarousel({
    dots:false,
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
// Go to the next item
$('.next-btn').click(function(e) {
    e.preventDefault();
    owlOne.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev-btn').click(function(e) {
    e.preventDefault();
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlOne.trigger('prev.owl.carousel', [300]);
})

// owl carousal started for section places
var owlTwo = $("#second-carousel")
owlTwo.owlCarousel({
    dots:false,
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:5
        }
    }
});
// owl carousal started for section clients
var owlThree = $("#Third-carousel")
owlThree.owlCarousel({
    dots:true,
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        }
    }
});
})

$(".about img").animate({"width":"100%"},3000)
$(".about h2").slideDown(1000 ,function(){
    $(".about p").slideDown(1000 , function(){
        $(".about a").animate({"width":"30%"}).slideDown(500)
    })
})

$("#item1").slideDown(1000 , function(){
    $("#item2").slideDown(1000 , function(){
        $("#item3").slideDown(1000 , function(){
            $("#item4").slideDown(1000 , function(){
                $("#item5").slideDown(1000 , function(){
                    $("#item6").slideDown(1000)
                })
            })
        })
    })
})

$(".travelling-highlights a").slideToggle(1000)
$(".travelling-highlights h2").slideToggle(1000)