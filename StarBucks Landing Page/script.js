function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function textColor(color){
    const circle = document.querySelector('span');
    circle.style.color = color;
}
function buttonColor(color){
    const circle = document.querySelector('.textbox a');
    circle.style.background = color;
}
function listColor(color){
    const circle = document.querySelector('header ul li a:hover');
    header.style.background = color;
}