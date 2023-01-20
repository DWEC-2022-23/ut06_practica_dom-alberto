var headerH1 = document.getElementsByTagName('h1')[0];
var inputColor = document.getElementsByTagName('input')[0];
var buttonChangeColor = document.getElementsByTagName('button')[0];

buttonChangeColor.addEventListener('click', () => {
    headerH1.style.color = inputColor.value;
});
