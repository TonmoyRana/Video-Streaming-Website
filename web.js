//base link set
// import config from '/config.js'

const base = document.createElement('base');
    base.href = config.baseHref;
    document.head.prepend(base);

//Dynamic Footer Year
    const footerYearPlace = document.querySelector(".footerYear");
    const currentYear = new Date();
    const footerYear = currentYear.getFullYear();
    const nextYear = footerYear + 1;
    footerYearPlace.innerHTML = footerYear + "-" + nextYear;
    


// Animation to every div
$("div").addClass("animate__animated animate__fadeInDown");
// Hamburger Menu
var toggleMenu = $(".nav-links");
var hamburger = $(".hamburger");
hamburger.on( "click", function() {
    hamburger.toggleClass('open');
    toggleMenu.toggleClass('hamMenu');
});
// price button
var p_radioButton = $(".radiobutton");
var price_value1 = $(".p-value1");
var price_value2 = $(".p-value2");
var price_value3 = $(".p-value3");
var priceType = $(".price-type");
p_radioButton.on( "click", function() {
    p_radioButton.toggleClass('rbutton');
        if(!$(".rbutton").is(':visible')){
            price_value1.html("&#36;35");
            price_value2.html("&#36;89");
            price_value3.html("&#36;125");
            priceType.html("/Month");
        }else{
            price_value1.html("&#36;420");
            price_value2.html("&#36;1068");
            price_value3.html("&#36;1500");
            priceType.html("/Year");
        }
});
// scroll top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
