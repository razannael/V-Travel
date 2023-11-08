
const navbar = document.querySelector('.navbar')
const headercontentspan = document.querySelector('.header-content span')
const scrolltotopbtn = document.querySelector('.scroll-to-top')
const placessection = document.querySelector('.places')
const loading = document.querySelector('.preloader-area')
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
})