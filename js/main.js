/* color opner code */
document.getElementById("coloropener").addEventListener("click", function() {

    var optionIcon = document.getElementById("color-option-hide-or-show");

    optionIcon.classList.toggle("active");
})

/* color changer code */

var rootColors = document.querySelector(':root');

function ColorOne(){
    rootColors.style.setProperty('--color-2', 'rgb(27, 188, 155)');
    rootColors.style.setProperty('--color-13', '#34495E');
    rootColors.style.setProperty('--color-7', '#777');
    rootColors.style.setProperty('--color-9', '#405a74');
    rootColors.style.setProperty('--color-12', '#22313F');
}
function ColorTwo(){
    rootColors.style.setProperty('--color-2', 'rgb(240, 96, 96)');
    rootColors.style.setProperty('--color-13', '#343a40');
    rootColors.style.setProperty('--color-7', '#444444');
    rootColors.style.setProperty('--color-9', '#333333');
    rootColors.style.setProperty('--color-12', '#000');
}
function ColorThree(){
    rootColors.style.setProperty('--color-2', 'rgb(40, 165, 168)');
    rootColors.style.setProperty('--color-13', '#1f2c37');
    rootColors.style.setProperty('--color-7', 'rgb(40, 165, 168)');
    rootColors.style.setProperty('--color-9', '#377989');
    rootColors.style.setProperty('--color-12', '#1f2c37');
}

/* navbar code */

function navShowHide(){
    var nav = document.querySelector(".small-device-nav-bar");

    nav.classList.toggle("active");
}