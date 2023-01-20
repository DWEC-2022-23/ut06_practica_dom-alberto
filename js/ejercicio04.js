var buttons = document.getElementsByTagName('button');

var inputText = document.getElementsByClassName('AñadirElemento')[0];
var mainList = Array.from(document.getElementsByClassName('lista')[0].childNodes)
        .filter(thisNode => thisNode.nodeName == 'UL')[0];

document.addEventListener('click', event => {
    if (event.target.tagName != 'BUTTON') {
        return;
    }
    
    switch (event.target.textContent) {
        case 'Añadir':
            if (!inputText.value) {
                return;
            }
            
            var newElement = document.createElement('li');
            newElement.innerText = inputText.value;
            
            inputText.value = '';
            
            mainList.appendChild(newElement);
            
            break;
        case 'BorrarUltimo':
            var lastChild = mainList.lastChild;
            
            if (lastChild != null) {
                lastChild.remove();
            }
            
            break;
        case 'BorrarPrimero':
            var firstChild = mainList.firstChild;
            
            if (firstChild != null) {
                firstChild.remove();
            }
            
            break;
    }
});
