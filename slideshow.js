function startSlideshow() {

    setTimeout(function () {
        document.getElementById("img-1").style = "transform: translateX(-100%)"
        document.getElementById("img-2").style = "transform: translateX(-100%)"
        document.getElementById("img-3").style = "transform: translateX(-100%)"
    }, 4000);

    setTimeout(function () {
        document.getElementById("img-1").style = "transform: translateX(-200%)"
        document.getElementById("img-2").style = "transform: translateX(-200%)"
        document.getElementById("img-3").style = "transform: translateX(-200%)"
    }, 8000);

    setTimeout(function () {
        document.getElementById("img-1").style = "transform: translateX(0%)"
        document.getElementById("img-2").style = "transform: translateX(0%)"
        document.getElementById("img-3").style = "transform: translateX(0%)"

        startSlideshow(); //repeat the function
    }, 12000);
}


/**
 * This function hides the basket Icon on the index.html
 */
function hideBasket() {
    if (window.location.href.endsWith('index.html')) {
        document.getElementById('basketIcon').classList.add('d-none');
    }
}


/**
 * This function hides the basket Icon on the index.html
 */
/* function hideBasket() {
    document.getElementById("basketIcon").classList.add('d-none');
} */