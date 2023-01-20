var buttonChangeColor = document.getElementById('buttonChangeColor');
var mainBox = document.getElementById('mainBox');

var isBoxBlack = false;

changeButtonText();

buttonChangeColor.addEventListener('click', () => {
    if (isBoxBlack) {
        mainBox.classList.remove('black');
        
        isBoxBlack = false;
    } else {
        mainBox.classList.add('black');
        
        isBoxBlack = true;
    }
    
    changeButtonText();
});

function changeButtonText() {
    if (isBoxBlack) {
        buttonChangeColor.innerHTML = 'fondo claro';
    } else {
        buttonChangeColor.innerHTML = 'fondo oscuro';
    }
}